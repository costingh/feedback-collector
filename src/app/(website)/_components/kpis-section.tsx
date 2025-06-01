export const KpisSection = () => {
	const kpis = [
		{ value: '3x', text: 'Collect Testimonials 3x Faster With Feedbackz' },
		{
			value: '+120h',
			text: 'Save Over 120 Hours on Manual Outreach and Chasing Feedback',
		},
		{
			value: '100%',
			text: 'Customizable Widgets That Match Your Brand Seamlessly',
		},
		{
			value: '+35%',
			text: 'Boost Conversion Rates by Showcasing Authentic Social Proof',
		},
	]

	return (
		<section className="w-full">
			<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-6 pb-8 lg:pb-16">
				<div className="grid w-full grid-cols-2 gap-6 md:grid-cols-4">
					{kpis.map((kpi, index) => (
						<div
							key={index}
							className="card-bg flex w-full flex-col rounded-2xl px-6 py-6 md:py-10"
						>
							<div className="text-center text-2xl font-bold text-white sm:text-2xl lg:text-4xl">
								{kpi.value}
							</div>
							<div className="text-center text-white text-[14px]">
								{kpi.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
