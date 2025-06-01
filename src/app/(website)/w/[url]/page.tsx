'use client'

import { LoadingSpinner } from '@/components/animations/loading-spinner'
import EmbeddableWidget from '@/components/widgets/EmbeddableWidget'

const LandingPage = ({ params }: { params: { url: string } }) => {
	return (
		<>
			{false ? (
				<div className="w-full h-full flex items-center justify-center">
					<span className="inline-block">
						<LoadingSpinner size={30} />
					</span>
				</div>
			) : (
				<>
					<EmbeddableWidget params={{ url: params.url }} />
				</>
			)}
		</>
	)
}

export default LandingPage
