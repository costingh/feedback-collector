import React from 'react'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

type Props = {
	title: string
	description: string
	children?: React.ReactNode
	footer?: React.ReactNode
}

const GlobalCard = ({ title, children, description, footer }: Props) => {
	return (
		<Card className="bg-transparent mt-3 border-[#70707061]">
			<CardHeader className="px-4 py-2">
				<CardTitle className="text-[13px] text-[#9D9D9D]">
					{title}
				</CardTitle>
				<CardDescription className="text-[#707070] text-[12px]">
					{description}
				</CardDescription>
			</CardHeader>
			{children && <div className="px-4">{children}</div>}
			{footer && <CardFooter className="px-4 py-2">{footer}</CardFooter>}
		</Card>
	)
}

export default GlobalCard
