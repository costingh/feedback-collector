import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
	icon: React.ReactNode
	title: string
	href: string
	selected: boolean
	notifications?: number
}

const SidebarItem = ({ href, icon, selected, title, notifications }: Props) => {
	return (
		<li className="">
			<Link
				href={href}
				className={cn(
					'text-sm group flex w-full justify-start font-[400] cursor-pointer hover:bg-gray-100 rounded-lg transition mb-[4px] px-[6px] py-[5px]',
					selected ? 'text-gray-600 bg-gray-100' : 'text-gray-600',
				)}
			>
				<div className="flex items-center flex-1 gap-[8px]">
					{icon}
					<span
						className={cn(
							'font-medium transition-all truncate w-32 text-[14px]',
							selected
								? 'text-gray-600 bg-gray-100'
								: 'text-gray-600',
						)}
					>
						{title}
					</span>
				</div>
				{}
			</Link>
		</li>
	)
}

export default SidebarItem
