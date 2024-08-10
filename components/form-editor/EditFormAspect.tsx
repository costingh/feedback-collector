"use client";

import React, { useState } from "react";
import ColorPicker from "../ColorPicker";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function EditFormAspect({
	backgroundColor,
	setBackgroundColor,
	primaryColor,
	setPrimaryColor,
	isChecked,
	setChecked
}) {

	return (
		<>
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
					<Switch id="animated-bg" checked={isChecked} onCheckedChange={setChecked} />
					<Label htmlFor="animated-bg" className="text-[13px] font-normal text-gray-400 leading-[17px]">Animated Background</Label>
				</div>
			</div>
		</>
	);
}

export default EditFormAspect;
