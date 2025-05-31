export const FormLoaderSkeleton = () => (
	<div className="w-full block">
		<div className="mb-2 bg-gray-300 animate-pulse h-[45px] rounded-md w-full block"></div>
       
		{[...Array(2)].map((_, i) => (
			<div key={i} className="flex items-center gap-2">
				<div className="my-2 bg-gray-300 animate-pulse h-[25px] rounded-md w-[25px]"></div>
				<div className="my-2 bg-gray-300 animate-pulse h-[25px] rounded-md w-[calc(100%-25px)]"></div>
			</div>
		))}

		<div className="my-2 bg-gray-300 animate-pulse h-[100px] md:h-[130px] rounded-md w-full"></div>
		<div className="mt-4 bg-gray-300 animate-pulse h-[40px] rounded-md w-full"></div>
	</div>
);