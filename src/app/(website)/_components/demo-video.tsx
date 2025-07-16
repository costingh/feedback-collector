export const DemoVideo = () => {
	return (
		<div className="relative mx-auto max-w-7xl px-6 pb-4 lg:px-16 mb-[100px]">
			<div className="relative overflow-hidden rounded-3xl ">
				<div className="to-transparent absolute bottom-0 left-0 right-0 hidden h-[250px] w-full bg-gradient-to-t from-[#272943] via-[#272943]/70 lg:flex"></div>
				<div
					className="video-container"
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
						className="video-wrapper"
						style={{
							position: 'relative',
							width: '100%',
							height: 0,
							paddingBottom: 'calc(51.90476190476191% + 40px)',
						}}
					>
						<video
							controls
							poster="/images/demo-video-poster.png"
							preload="metadata"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
							aria-label="Feedbackz.co Testimonial Collector Demo"
						>
							<source src="/demo-video.mp4" type="video/mp4" />
							<source src="/demo-video.webm" type="video/webm" />
							<p>Your browser doesn't support HTML5 video. Here is a <a href="/demo-video.mp4">link to the video</a> instead.</p>
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}
