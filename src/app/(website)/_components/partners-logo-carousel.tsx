import React from 'react'
import Image from 'next/image'

const logos = [
	'/images/trusted-by-logos/partnerLogo1.svg',
	'/images/trusted-by-logos/partnerLogo2.svg',
	'/images/trusted-by-logos/partnerLogo3.svg',
]

export const PartnersLogoCarousel = () => {
	return (
		<section className="mx-auto flex max-w-7xl flex-col items-center justify-center pb-8 lg:pb-16 px-6 overflow-hidden">
			<div className="flex flex-row items-center justify-center">
				<span className="max-w-3xl text-center text-lg !leading-8 text-gray-400 lg:pb-0 lg:text-xl my-[30px]">
					Trusted &amp; Integrated with
				</span>
			</div>

			<div className="relative w-full overflow-hidden h-[90px]">
				<div className="flex animate-carousel whitespace-nowrap">
					{[
						...logos,
						...logos,
						...logos,
						...logos,
						...logos,
						...logos,
					].map((logo, i) => (
						<Image
							key={i}
							alt={`Partner Logo ${i}`}
							src={logo}
							className="inline-block mx-8"
							width={85}
							height={85}
							priority
						/>
					))}
				</div>
			</div>
		</section>
	)
}
