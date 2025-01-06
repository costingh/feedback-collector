import { Monitor, Smartphone, Tablet } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";

type WidgetEditorNavProps = {
	deviceResolution: { width: number; height: number };
	setDeviceResolution: (res: { width: number; height: number }) => void;
};

function WidgetEditorNav({ deviceResolution, setDeviceResolution }: WidgetEditorNavProps) {
	// State to track the selected device (smartphone, tablet, monitor)
	const [selectedDevice, setSelectedDevice] = useState<string>("monitor"); // Default is 'monitor'

	// Handler for device buttons
	const handleDeviceClick = (device: string) => {
		setSelectedDevice(device); // Set the selected device

		switch (device) {
			case "smartphone":
				setDeviceResolution({ width: 375, height: 667 }); // Common smartphone resolution
				break;
			case "tablet":
				setDeviceResolution({ width: 768, height: 1024 }); // Common tablet resolution
				break;
			case "monitor":
				setDeviceResolution({ width: 1920, height: 1080 }); // Common monitor resolution
				break;
			default:
				break;
		}
	};

	// Handler for input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, dimension: "width" | "height") => {
		const value = parseInt(e.target.value, 10) || 0; // Convert input to a number
		setDeviceResolution({ ...deviceResolution, [dimension]: value });
	};

	return (
		<div className="bg-white p-6 border-b-[1px] border-gray-200 flex items-center justify-between gap-4">
			<div className="ml-[60px]"><Link href='/dashboard'>Go Back</Link></div>
			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2 bg-gray-100 rounded-[15px] px-[13px] py-[5px]">
					<div
						className={`p-[4px] rounded-[10px] cursor-pointer ${
							selectedDevice === "smartphone" ? "bg-gray-300" : "bg-gray-100"
						}`}
						onClick={() => handleDeviceClick("smartphone")}
					>
						<Smartphone />
					</div>
					<div
						className={`p-2 rounded-sm cursor-pointer ${
							selectedDevice === "tablet" ? "bg-gray-300" : "bg-gray-100"
						}`}
						onClick={() => handleDeviceClick("tablet")}
					>
						<Tablet />
					</div>
					<div
						className={`p-2 rounded-sm cursor-pointer ${
							selectedDevice === "monitor" ? "bg-gray-300" : "bg-gray-100"
						}`}
						onClick={() => handleDeviceClick("monitor")}
					>
						<Monitor />
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Input
						value={deviceResolution.width}
						placeholder="1440"
						onChange={(e) => handleInputChange(e, "width")}
						className="px-[10px] py-[0px] rounded-[5px] border-[1px] border-gray-200 text-[#000] w-[60px] text-[13px]"
					/>
					x
					<Input
						value={deviceResolution.height}
						placeholder="1024"
						onChange={(e) => handleInputChange(e, "height")}
						className="px-[10px] py-[0px] rounded-[5px] border-[1px] border-gray-200 text-[#000] w-[60px] text-[13px]"
					/>
					<span>px</span>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default WidgetEditorNav;
