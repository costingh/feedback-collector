import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				'max-w-full md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto px-5 h-full',
				className || '',
			)}
		>
			{children}
		</div>
	)
}

export default Container
