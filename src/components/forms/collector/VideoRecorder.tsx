import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Mic, Video, Play, RotateCcw } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface VideoRecorderProps {
	onVideoChange?: (file: File | null) => void
	isRequired?: boolean
}

export default function VideoRecorder({
	onVideoChange,
	isRequired = false,
}: VideoRecorderProps) {
	const [recording, setRecording] = useState(false)
	const [time, setTime] = useState('00:00')
	const [volume, setVolume] = useState(0)
	const [videoUrl, setVideoUrl] = useState<string | null>(null)
	const [stream, setStream] = useState<MediaStream | null>(null)
	const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
		null,
	)
	const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null)
	const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>(
		[],
	)
	const [availableMicrophones, setAvailableMicrophones] = useState<
		MediaDeviceInfo[]
	>([])
	const [selectedCamera, setSelectedCamera] = useState<string>('')
	const [selectedMicrophone, setSelectedMicrophone] = useState<string>('')
	const [isPreviewMode, setIsPreviewMode] = useState(false)
	const maxTime = 300 // in seconds

	const videoRef = useRef<HTMLVideoElement | null>(null)
	const audioContextRef = useRef<AudioContext | null>(null)
	const analyserRef = useRef<AnalyserNode | null>(null)
	const dataArrayRef = useRef<Uint8Array | null>(null)
	const animationFrameRef = useRef<number | null>(null)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	const initCamera = async () => {
		try {
			const constraints = {
				video: selectedCamera
					? { deviceId: { exact: selectedCamera } }
					: true,
				audio: selectedMicrophone
					? { deviceId: { exact: selectedMicrophone } }
					: true,
			}

			const newStream =
				await navigator.mediaDevices.getUserMedia(constraints)
			setStream(newStream)
			if (videoRef.current) {
				videoRef.current.srcObject = newStream
				videoRef.current
					.play()
					.catch((err) => console.error('Error playing video:', err))
			}
		} catch (error) {
			console.error('Camera access denied', error)
		}
	}

	useEffect(() => {
		const getDevices = async () => {
			try {
				const devices = await navigator.mediaDevices.enumerateDevices()
				const cameras = devices.filter(
					(device) => device.kind === 'videoinput',
				)
				const microphones = devices.filter(
					(device) => device.kind === 'audioinput',
				)

				setAvailableCameras(cameras)
				setAvailableMicrophones(microphones)

				if (cameras.length > 0) {
					setSelectedCamera(cameras[0].deviceId)
				}
				if (microphones.length > 0) {
					setSelectedMicrophone(microphones[0].deviceId)
				}
			} catch (error) {
				console.error('Error getting devices:', error)
			}
		}

		getDevices()
		initCamera()

		return () => {
			stream?.getTracks().forEach((track) => track.stop())
			stopAudio()
		}
	}, [selectedCamera, selectedMicrophone])

	const handleCameraChange = async (deviceId: string) => {
		setSelectedCamera(deviceId)
	}

	const handleMicrophoneChange = async (deviceId: string) => {
		setSelectedMicrophone(deviceId)
	}

	const handleRecord = () => {
		if (!recording) {
			startRecording()
		} else {
			stopRecording()
			setIsPreviewMode(true)
		}
	}

	const handlePreview = () => {
		if (videoUrl) {
			// Create a new video element to play the recorded video
			const video = document.createElement('video')
			video.src = videoUrl
			video.controls = true
			video.className = 'w-full h-full object-cover'
			video.autoplay = true

			// Replace the current video element with the new one
			const container = document.querySelector('.video-container')
			if (container) {
				container.innerHTML = ''
				container.appendChild(video)
			}
		}
	}

	const handleReset = async () => {
		// Clear the video container and restart the camera
		const container = document.querySelector('.video-container')
		if (container) {
			container.innerHTML = ''
			const video = document.createElement('video')
			video.className = 'w-full h-full object-cover'
			video.autoplay = true
			video.muted = true
			video.playsInline = true
			container.appendChild(video)
			videoRef.current = video
		}

		setVideoUrl(null)
		setRecordedBlob(null)
		setTime('00:00')
		// Notify parent that video is cleared
		onVideoChange?.(null)

		// Restart the camera stream
		if (stream) {
			stream.getTracks().forEach((track) => track.stop())
		}
		await initCamera()
	}

	const startRecording = () => {
		if (!stream) return

		const recorder = new MediaRecorder(stream)
		const chunks: Blob[] = []

		recorder.ondataavailable = (e) => {
			chunks.push(e.data)
		}

		recorder.onstop = () => {
			const completeBlob = new Blob(chunks, { type: 'video/webm' })
			setRecordedBlob(completeBlob)
			setVideoUrl(URL.createObjectURL(completeBlob))

			// Convert Blob to File and notify parent
			const videoFile = new File([completeBlob], 'video.webm', {
				type: 'video/webm',
			})
			onVideoChange?.(videoFile)
		}

		recorder.start()
		setMediaRecorder(recorder)
		setRecording(true)
		startAudio()
		startTimer()
	}

	const stopRecording = () => {
		mediaRecorder?.stop()
		stopAudio()
		clearInterval(timerRef.current!)
		setRecording(false)
	}

	const startTimer = () => {
		let seconds = 0
		timerRef.current = setInterval(() => {
			seconds++
			const min = String(Math.floor(seconds / 60)).padStart(2, '0')
			const sec = String(seconds % 60).padStart(2, '0')
			setTime(`${min}:${sec}`)
			if (seconds >= maxTime) {
				stopRecording()
			}
		}, 1000)
	}

	const startAudio = async () => {
		const audioCtx = new AudioContext()
		const source = audioCtx.createMediaStreamSource(stream!)
		const analyser = audioCtx.createAnalyser()
		source.connect(analyser)
		analyser.fftSize = 64

		const bufferLength = analyser.frequencyBinCount
		const dataArray = new Uint8Array(bufferLength)

		audioContextRef.current = audioCtx
		analyserRef.current = analyser
		dataArrayRef.current = dataArray

		const updateVolume = () => {
			analyser.getByteFrequencyData(dataArray)
			const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length
			setVolume(avg)
			animationFrameRef.current = requestAnimationFrame(updateVolume)
		}
		updateVolume()
	}

	const stopAudio = () => {
		if (animationFrameRef.current) {
			cancelAnimationFrame(animationFrameRef.current)
		}
		audioContextRef.current?.close()
		audioContextRef.current = null
		analyserRef.current = null
		dataArrayRef.current = null
	}

	const renderBars = () => {
		return (
			<div className="flex items-end gap-1 h-10">
				{Array.from({ length: 10 }).map((_, i) => {
					const height = Math.max(
						4,
						(volume / 256) * 40 * (0.5 + Math.random()),
					)
					return (
						<div
							key={i}
							className="w-1 bg-green-500 rounded-sm transition-all duration-100"
							style={{ height: `${height}px` }}
						/>
					)
				})}
			</div>
		)
	}

	return (
		<div className="w-full h-[400px] flex flex-col items-center justify-between relative mt-4">
			<div className="w-full h-full bg-black/10 rounded-lg overflow-hidden flex items-center justify-center video-container">
				<video
					ref={videoRef}
					autoPlay
					muted
					playsInline
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="absolute top-2 right-2 flex gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<Video />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{availableCameras.map((camera) => (
							<DropdownMenuItem
								key={camera.deviceId}
								onClick={() =>
									handleCameraChange(camera.deviceId)
								}
							>
								{camera.label ||
									`Camera ${camera.deviceId.slice(0, 5)}`}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<Mic />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{availableMicrophones.map((microphone) => (
							<DropdownMenuItem
								key={microphone.deviceId}
								onClick={() =>
									handleMicrophoneChange(microphone.deviceId)
								}
							>
								{microphone.label ||
									`Microphone ${microphone.deviceId.slice(0, 5)}`}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="flex items-center justify-between w-full mt-2">
				<span className="text-sm font-medium text-gray-700">
					{time} / 05:00
				</span>
				<div className="flex items-center gap-3">
					{!videoUrl ? (
						<Button
							size="icon"
							className="bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 flex items-center justify-center"
							onClick={handleRecord}
						>
							<div
								className={`w-6 h-6 rounded-full transition-all duration-300 ${
									recording
										? 'bg-red-400 scale-110'
										: 'bg-red-500'
								}`}
							/>
						</Button>
					) : (
						<div className="flex gap-2">
							<Button
								size="icon"
								className="bg-green-600 hover:bg-green-700 rounded-full w-12 h-12 flex items-center justify-center"
								onClick={handlePreview}
							>
								<Play className="w-6 h-6 text-white" />
							</Button>
							<Button
								size="icon"
								className="bg-gray-600 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center"
								onClick={handleReset}
							>
								<RotateCcw className="w-6 h-6 text-white" />
							</Button>
						</div>
					)}
					{recording && renderBars()}
				</div>
			</div>
			{isRequired && !videoUrl && (
				<p className="text-red-500 text-sm mt-2">Video is required</p>
			)}
		</div>
	)
}
