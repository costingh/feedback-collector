import React from 'react'
import ReactDOM from 'react-dom/client'
import EmbedFormComponent from './EmbedFormComponent'

class FeedbackzFormEmbed extends HTMLElement {
	connectedCallback() {
		const formId = this.getAttribute('data-form-id')
		if (!formId) {
			console.error('Form ID is missing!')
			return
		}

		const widgetType = this.getAttribute('data-widget-type')

		const mountPoint = document.createElement('div')
		this.appendChild(mountPoint)

		ReactDOM.createRoot(mountPoint).render(
			<EmbedFormComponent
				params={{ formUrl: formId }}
				searchParams={{
					raw: 'true',
					centered: 'false',
					widgetType: widgetType || undefined,
				}}
			/>,
		)
	}
}

if (!customElements.get('feedbackz-form')) {
	customElements.define('feedbackz-form', FeedbackzFormEmbed)
}
