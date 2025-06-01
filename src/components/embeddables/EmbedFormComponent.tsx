'use client'
import React, { useEffect, useState } from 'react'

import FormWidget from '@/components/forms/form-editor/FormWidget'
import { FloatingFormWidget } from './FloatingFormWidget'

const EmbedFormComponent = ({
	params,
	searchParams,
}: {
	params: { formUrl: string }
	searchParams: { raw?: string; centered?: string; widgetType?: string }
}) => {
	const [form, setForm] = useState<any>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://www.feedbackz.co/api/form/embed/${params.formUrl}`,
				)
				const data = await response.json()
				setForm(data.data?.form)
			} catch (error) {
				console.error('Error fetching form:', error)
				setForm(null)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [params.formUrl])

	return (
		<>
			{searchParams.widgetType == 'chat-style-floading-widget' ? (
				<FloatingFormWidget>
					<FormWidget
						formUrl={params.formUrl}
						isRaw={searchParams.raw || ''}
						isCentered={searchParams.centered}
						form={form}
						isSearchingForm={loading}
					/>
				</FloatingFormWidget>
			) : (
				<main className="w-screen bg-cover bg-center">
					<div className="h-full w-full py-4">
						<FormWidget
							formUrl={params.formUrl}
							isRaw={searchParams.raw || ''}
							isCentered={searchParams.centered}
							form={form}
							isSearchingForm={loading}
						/>
					</div>
				</main>
			)}
		</>
	)
}

export default EmbedFormComponent
