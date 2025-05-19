import { useState } from "react";

function VideoWithFallback({ src }: { src: string }) {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return (
			<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
				Video failed to load
			</div>
		);
	}

	return (
		<video
			className="w-full h-full object-cover bg-gray-200"
			controls
			preload="metadata"
			onError={() => setHasError(true)}
            poster={src}
		>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}

export default VideoWithFallback;