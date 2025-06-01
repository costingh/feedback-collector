import React, { useEffect } from 'react'

export default function Confetti() {
	useEffect(() => {
		const confettiColors = [
			'#FF4500',
			'#FF6347',
			'#FFD700',
			'#ADFF2F',
			'#32CD32',
			'#00FA9A',
			'#00CED1',
			'#1E90FF',
			'#9370DB',
			'#FF69B4',
			'#FF1493',
			'#FFB6C1',
			'#DC143C',
		]
		const confettiCount = 100
		const confettiContainer = document.createElement('div')
		confettiContainer.className = 'confetti-container'

		document.body.appendChild(confettiContainer)

		for (let i = 0; i < confettiCount; i++) {
			const confetti = document.createElement('div')
			confetti.className = 'confetti'
			confetti.style.backgroundColor =
				confettiColors[
					Math.floor(Math.random() * confettiColors.length)
				]
			confetti.style.left = `${Math.random() * 100}vw`
			confetti.style.animationDuration = `${Math.random() * 2 + 3}s`
			confetti.style.transform = `rotate(${Math.random() * 360}deg)`
			confettiContainer.appendChild(confetti)
		}

		const cleanup = () => {
			if (confettiContainer && confettiContainer.parentNode) {
				confettiContainer.parentNode.removeChild(confettiContainer)
			}
		}

		setTimeout(cleanup, 5000) // Remove confetti after 5 seconds

		return cleanup // Cleanup on component unmount
	}, [])

	return null // No UI for this component
}
