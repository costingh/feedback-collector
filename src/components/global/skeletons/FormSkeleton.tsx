import React from 'react'

const FormSkeleton = () => {
	return (
		<div className="w-full border-[1px] border-gray-200 rounded-[20px] px-6 py-5 relative overflow-hidden mb-4">
			<div className="left-0 top-0 absolute h-full w-[5px] bg-gray-300 animate-pulse"></div>
			<div className="right-0 top-0 absolute h-full w-[5px] bg-gray-300 animate-pulse"></div>

			<div className="flex justify-between w-full items-center animate-pulse">
				<div className="flex flex-col space-y-3 w-3/4">
					<div className="h-4 bg-gray-300 rounded w-[200px]"></div>
					<div className="h-3 bg-gray-300 rounded w-[275px]"></div>
				</div>
				<div className="flex gap-3 w-[250px]">
					{['Visits', 'Testimonials', 'Response Rate'].map(
						(item, index) => (
							<div
								className="flex flex-col items-center gap-[0px] w-full"
								key={index}
							>
								<div className="h-4 bg-gray-300 rounded w-[20px]"></div>
								<span className="h-3 bg-gray-300 rounded w-full mt-2"></span>
							</div>
						),
					)}
				</div>
			</div>
			<div className="flex items-center mt-[10px] justify-between">
				<div className="flex gap-4 w-full animate-pulse">
					<div className="h-7 bg-gray-300 rounded w-[80px]"></div>
					<div className="h-7 bg-gray-300 rounded w-[80px]"></div>
					<div className="h-7 bg-gray-300 rounded w-[80px]"></div>
					<div className="h-7 bg-gray-300 rounded w-[80px]"></div>
					<div className="h-7 bg-gray-300 rounded w-[80px]"></div>
				</div>
				<div className="h-7 bg-gray-300 rounded w-[80px] animate-pulse"></div>
			</div>
		</div>
	)
}

export default FormSkeleton
