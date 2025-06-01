// import LandingPageNavBar from '../(website)/_components/navbar'
import SearchForm from './_components/SearchForm'

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen bg-[#050520]">
			<header className="border-b border-gray-800">
				<div className="max-w-4xl mx-auto px-5 py-8">
					{/* <LandingPageNavBar /> */}
					<div className="flex items-center justify-between mb-8">
						<a
							href="/blog"
							className="text-2xl font-bold text-white"
						>
							Blog
						</a>
						<nav className="flex items-center gap-6">
							<a
								href="/blog/archive"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Archive
							</a>
							<a
								href="/blog/categories"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Categories
							</a>
							<a
								href="/blog/authors"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Authors
							</a>
						</nav>
					</div>
					<SearchForm />
				</div>
			</header>
			<main>{children}</main>
		</div>
	)
}
