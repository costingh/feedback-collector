import React from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

interface UploadImageProps {
	text: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	isRequired?: boolean;
	primaryColor?: string;
    baseColor?: string
}

const UploadImage: React.FC<UploadImageProps> = ({
	text,
	src,
	alt,
	width,
	height,
	isRequired = false,
	primaryColor,
    baseColor
}) => {
	return (
		<div className="flex flex-col flex-1 items-center gap-2">
			<span className="font-[600] text-[13px] text-gray-400">
				{text}
				{isRequired && <span className="text-red-500">*</span>}
			</span>
			<Image
				src={src}
				width={width}
				height={height}
				alt={alt}
				className="rounded-[3px]"
			/>
			<button
				className="px-3 py-1 cursor-pointer rounded-lg text-gray-50 font-normal tracking-wide text-[12px] flex items-center gap-4 justify-center hover:opacity-[0.7]"
				style={{
					backgroundColor: primaryColor || baseColor,
				}}
			>
				<div>Upload</div> <Upload size={14} />
			</button>
		</div>
	);
};

export default UploadImage;
