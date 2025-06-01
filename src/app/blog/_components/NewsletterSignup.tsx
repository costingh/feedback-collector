'use client'

import { useState } from 'react'
import StructuredData from '@/components/global/StructuredData'

export default function NewsletterSignup() {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle')

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Feedbackz Blog Newsletter',
		description:
			'Subscribe to our newsletter for the latest updates and insights.',
		url: 'https://feedbackz.co/blog',
		publisher: {
			'@type': 'Organization',
			name: 'Feedbackz',
			logo: {
				'@type': 'ImageObject',
				url: 'https://feedbackz.co/images/app-preview.png',
			},
		},
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setStatus('loading')

		try {
			// Replace with your actual newsletter subscription endpoint
			const response = await fetch('/api/newsletter/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})

			if (!response.ok) throw new Error('Subscription failed')

			setStatus('success')
			setEmail('')
		} catch (error) {
			setStatus('error')
		}
	}

	return (
		<div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
			<StructuredData type="WebSite" data={schemaData} />

			<div className="text-center mb-6">
				<h3 className="text-xl font-semibold text-white mb-2">
					Subscribe to our Newsletter
				</h3>
				<p className="text-gray-400">
					Get the latest updates and insights delivered to your inbox.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="max-w-md mx-auto">
				<div className="flex gap-4">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						required
						className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						disabled={status === 'loading'}
						className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{status === 'loading' ? 'Subscribing...' : 'Subscribe'}
					</button>
				</div>

				{status === 'success' && (
					<p className="mt-4 text-sm text-green-400">
						Thanks for subscribing! Please check your email to
						confirm.
					</p>
				)}

				{status === 'error' && (
					<p className="mt-4 text-sm text-red-400">
						Something went wrong. Please try again later.
					</p>
				)}
			</form>
		</div>
	)
}
