import { Monitor, Smartphone, Tablet } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

function WidgetEditorNav() {
	return (
		<div className="bg-white p-6 border-b-[1px] border-gray-200 flex items-center justify-center gap-4">
			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2 bg-gray-100 rounded-[15px] px-[13px] py-[5px]">
					<div className="p-[4px] rounded-[10px] bg-gray-300 cursor-pointer">
						<Smartphone />
					</div>
					<div className="p-2 rounded-sm bg-gray-100 cursor-pointer">
						<Tablet />
					</div>
					<div className="p-2 rounded-sm bg-gray-100 cursor-pointer">
						<Monitor />
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Input
						value={1440}
						placeholder="1440"
						className="px-[10px] py-[0px] rounded-[5px] border-[1px] border-gray-200 text-[#000] w-[60px] text-[13px]"
					/>
					x
					<Input
						value={1024}
						placeholder="1024"
						className="px-[10px] py-[0px] rounded-[5px] border-[1px] border-gray-200 text-[#000] w-[60px] text-[13px]"
					/>
					<span>px</span>
				</div>
			</div>
		</div>
	);
}

export default WidgetEditorNav;
