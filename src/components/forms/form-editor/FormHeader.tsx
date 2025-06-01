import Image from 'next/image'

export const FormHeader = ({
	brandName,
	brandLogo,
	primaryColor,
	BASE_PRIMARY_COLOR,
	step,
	setStep,
	onInteraction,
}: {
	brandName: string | undefined
	brandLogo: string | undefined
	primaryColor: string | undefined
	BASE_PRIMARY_COLOR: string | undefined
	step: number | undefined
	setStep: any | undefined
	onInteraction: any | undefined
}) => (
	<div className="flex items-center justify-between mb-4 md:mb-8">
		<div className="relative">
			{!brandName || !brandLogo || !primaryColor ? (
				<div className="flex items-center gap-3">
					<div className="w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-gray-300 rounded-[10px] animate-pulse"></div>
					<div className="h-6 md:h-8 bg-gray-300 rounded w-[150px] animate-pulse"></div>
				</div>
			) : (
				<div className="flex items-center gap-3">
					<Image
						src={'/images' + brandLogo || ''}
						alt={brandName || 'logo'}
						width={45}
						height={45}
						className="w-[35px] md:w-[45px] h-[35px] md:h-[45px]"
					/>
					<h1 className="text-[18px] md:text-[25px] font-black text-gray-900 font-fredoka">
						{brandName}
					</h1>
				</div>
			)}
			{/* <div
				className="w-[80px] h-[2px] rounded-full absolute bottom-[-10px] left-0"
				style={{
					backgroundColor: primaryColor || BASE_PRIMARY_COLOR,
				}}
			></div> */}
		</div>
		{step != 0 && step != 4 && (
			<div
				className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 border-[1px] border-gray-300 rounded-full cursor-pointer"
				onClick={() => {
					// @ts-ignore
					setStep((prevStep) =>
						prevStep == 1 || prevStep == 2
							? 0
							: prevStep == 3
								? 0
								: 0,
					)
					if (onInteraction) onInteraction('prevStep')
				}}
			>
				<svg
					className="w-6 h-6 text-gray-400"
					clipRule="evenodd"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
						fillRule="nonzero"
					/>
				</svg>
			</div>
		)}
	</div>
)
