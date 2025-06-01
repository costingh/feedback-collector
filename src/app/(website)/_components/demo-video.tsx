export const DemoVideo = () => {
	return (
		<div className="relative mx-auto max-w-7xl px-6 pb-4 lg:px-16">
			<div className="relative overflow-hidden rounded-3xl ">
				<div className="to-transparent absolute bottom-0 left-0 right-0 hidden h-[250px] w-full bg-gradient-to-t from-[#272943] via-[#272943]/70 lg:flex"></div>
				<div
					id="howdygo-embed"
					style={{
						width: '100%',
						maxWidth: '1890px',
						backgroundColor: '#ffffff',
						border: '1px solid #e2e8f0',
						borderRadius: '12px',
						overflow: 'hidden',
						boxShadow:
							'0px 0px 1px rgba(45, 55, 72, 0.05), 0px 4px 8px rgba(45, 55, 72, 0.1)',
					}}
				>
					<div
						id="howdygo-wrapper"
						style={{
							position: 'relative',
							width: '100%',
							height: 0,
							paddingBottom: 'calc(51.90476190476191% + 40px)',
						}}
					>
						<iframe
							id="howdygo-frame"
							src="https://app.howdygo.com/embed/902f50d9-2409-4bea-863d-61f4ae6adb1a"
							title="Feedbackz.co Testimonial Collector Demo"
							aria-label="How Feedbackz.co works?"
							allowFullScreen
							allow="clipboard-write"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}
