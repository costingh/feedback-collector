"use client";

import React from "react";
import ColorPicker from "../ColorPicker";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import UploadFormEditorLogo from "./UploadFormEditorLogo";

interface EditFormAspectProps {
	backgroundColor: string;
	setBackgroundColor: (val: string) => void;
	primaryColor: string;
	setPrimaryColor: (val: string) => void;
	isChecked: boolean;
	setChecked: (checked: boolean) => void;
	brandLogo: string;
	brandName: string;
	handleBrandNameChange: (val: string) => void;
	setBrandLogo: (val: string) => void;
}

const EditFormAspect: React.FC<EditFormAspectProps> = ({
	backgroundColor,
	setBackgroundColor,
	primaryColor,
	setPrimaryColor,
	isChecked,
	setChecked,
	brandLogo,
	brandName,
	handleBrandNameChange,
	setBrandLogo,
}) => {
	return (
		<>
			<div className="flex w-full">
				<div className="w-full p-2 border-[1px] border-gray-200 flex gap-3 items-center rounded-[8px] mb-2">
					{/* <Image src={brandLogo || ''} alt={brandName || 'logo'} width={60} height={60}/> */}
					<UploadFormEditorLogo
						src={brandLogo || ''}
						alt={brandName || 'logo'} 
						width={50} 
						height={50}
						inputType="form-logo"
						setImages={setBrandLogo}
					/>
					<input type='text' value={brandName} onChange={(e) => handleBrandNameChange(e.target.value)} className='outline-none text-3xl font-black text-gray-900 tracking-wide w-full' />
				</div>
			</div>
			<div className="flex gap-5 items-center w-full">
				<div className="w-[185px]">
					<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
						Background Color
					</span>
					<ColorPicker
						inputValue={backgroundColor}
						setInputValue={setBackgroundColor}
					/>
				</div>
				<div className="w-[185px]">
					<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
						Primary Color
					</span>
					<ColorPicker
						inputValue={primaryColor}
						setInputValue={setPrimaryColor}
					/>
				</div>
			</div>
			<div className="flex mt-4">
				<div className="flex items-center space-x-2">
					<Switch
						id="animated-bg"
						checked={isChecked}
						onCheckedChange={setChecked}
					/>
					<Label
						htmlFor="animated-bg"
						className="text-[13px] font-normal text-gray-400 leading-[17px]"
					>
						Animated Background
					</Label>
				</div>
			</div>
		</>
	);
};

export default EditFormAspect;
