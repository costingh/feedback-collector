'use client'

import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'
import SpinnerButton from '@/components/global/loader/spinner-button'

const FeatureRequestPage = () => {
	const [description, setDescription] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const handleSubmit = async () => {
		if (!description.trim()) {
			toast.error('Feature description cannot be empty')
			return
		}

		setLoading(true)
		try {
			const response = await axios.post('/api/request-feature', {
				description,
			})
			if (response.status === 200) {
				toast.success('Feature request submitted successfully!')
				setDescription('')
			} else {
				toast.error('Failed to submit the feature request.')
			}
		} catch (error) {
			console.error(error)
			toast.error('Unexpected error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-[18px] font-semibold mb-4">
				Request a Feature
			</h1>
			<p className="mb-4 text-[14px] text-gray-600">
				Have an idea for a new feature? We’d love to hear it! Share your
				thoughts with us, and help shape the future of our platform.
			</p>

			<Textarea
				placeholder="Describe the feature in detail"
				className="w-full mb-4 min-h-[200px]"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				disabled={loading}
			/>

			<SpinnerButton loading={loading} handleSubmit={handleSubmit} />
		</div>
	)
}

export default FeatureRequestPage
