import Link from 'next/link'
import clsx from 'clsx'

type HeroButtonProps = {
	variant: 'sm' | 'md' | 'lg'
	text: string
}

export const HeroButton = ({ variant, text }: HeroButtonProps) => {
	const variantStyles = {
		sm: {
			padding: 'py-2 px-4',
			text: '!text-[15px]',
			border: '',
			width: 'sm:max-w-[250px]',
		},
		md: {
			padding: 'py-3 px-6',
			text: 'text-base',
			border: 'border-4 border-gray-800',
			width: 'sm:max-w-[300px]',
		},
		lg: {
			padding: 'py-4 px-8',
			text: 'text-lg',
			border: 'border-4 border-gray-800',
			width: 'sm:max-w-[400px]',
		},
	}

	const styles = variantStyles[variant]

	return (
		<div
			className={clsx(
				'relative w-full overflow-hidden rounded-2xl p-[1px] z-[99]',
				styles.width,
			)}
		>
			<div className="absolute inset-0 z-10 h-[1000px] animate-rotate rounded-lg bg-[conic-gradient(#6756ff_20deg,transparent_120deg)]" />
			<div
				className={clsx(
					'relative z-20 flex w-full flex-col items-center justify-center gap-6 rounded-2xl overflow-hidden',
					styles.border,
				)}
			>
				<Link
					href="/auth/sign-up"
					className={clsx(
						'btn-landing flex w-full max-w-full flex-col text-center font-semibold',
						styles.padding,
						styles.text,
					)}
					data-discover="true"
				>
					{text}
				</Link>
			</div>
		</div>
	)
}
