import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
			<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
			<h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
			<p className="text-gray-500 mb-6 text-center max-w-md">
				Sorry, the page you are looking for does not exist or has been moved.<br />
				But don't worry, you can find plenty of other things on our homepage or explore some of our popular sections below.
			</p>
			<div className="flex flex-col sm:flex-row gap-4 mb-8">
				<Link href="/" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Go to Homepage</Link>
				<Link href="/blog" className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Visit Blog</Link>
				<Link href="/dashboard" className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Dashboard</Link>
				<Link href="/" className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Contact Us</Link>
			</div>
			<div className="text-gray-400 text-sm">If you think this is a mistake, please <a href="mailto:gheorghe.costin2001@yahoo.com" className="underline">contact support</a>.</div>
		</div>
	)
} 