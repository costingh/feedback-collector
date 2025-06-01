import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo({ isTransparentBg }: { isTransparentBg?: boolean }) {
	return (
		<Link href="/">
			<div>
				{isTransparentBg ? (
					<div className="flex items-center ">
						<Image
							width={50}
							height={50}
							alt=""
							src="/images/logo.png"
							className="mt-3"
						/>
						<Image
							width={180}
							height={35}
							alt="Feedbackz."
							src="/images/logo-text-white.png"
						/>
					</div>
				) : (
					<Image
						width={200}
						height={35}
						alt="Feedbackz."
						src="/images/logo-full.png"
					/>
				)}
			</div>
		</Link>
	)
}

export default Logo
