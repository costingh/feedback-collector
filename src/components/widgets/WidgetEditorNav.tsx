import { ArrowLeft, Monitor, Smartphone, Tablet } from "lucide-react";
import React, { Dispatch, useState, SetStateAction } from "react";
import { Input } from "../ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { _STUDIO_SIDEBAR_BUTTONS } from "@/constants/studio-sidebar";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
type WidgetEditorNavProps = {
	deviceResolution: { width: number; height: number };
	setDeviceResolution: (res: { width: number; height: number }) => void;
	setActiveSubmenu: Dispatch<SetStateAction<string>>;
};

function WidgetEditorNav({ deviceResolution, setDeviceResolution, setActiveSubmenu }: WidgetEditorNavProps) {
	// State to track the selected device (smartphone, tablet, monitor)
	const [selectedDevice, setSelectedDevice] = useState<string>("monitor"); // Default is 'monitor'
	const router = useRouter();
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

	const renderSidebarButton = (route: any) => {
		// const isActive = activeSubmenu === route.key;
		const buttonClasses = cn(
			"flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-lg transition px-4 py-2 no-wrap gap-[4px]",
			// isActive ? "text-gray-600 bg-gray-100" : "text-gray-600"
		);

		const ButtonContent = () => (
			<div
				className={buttonClasses}
				onClick={() => setActiveSubmenu(route.key)}
			>
				<route.icon className={cn("h-4 w-4", route.color)} />
				<span className='text-[13px] text-gray-700'>{route.label}</span>
			</div>
		);

		return <ButtonContent/>;

		// Wrap with ShareWidgetModal if applicable
		// return route.key === "share_widget" ? (
		// 	<ShareWidgetModal widgetUrl={widget?.url || ''}>
		// 		<ButtonContent/>
		// 	</ShareWidgetModal>
		// ) : (
		// 	<ButtonContent/>
		// );
	};

	return (
		<div className="bg-white p-6 border-b-[1px] border-gray-200 flex items-center justify-between gap-4">
			<div className="flex items-center gap-2">
				{/* go back button */}
				<Button variant="outline" size="icon" className="rounded-full" onClick={() => router.back()}>
					<ArrowLeft className="h-4 w-4" />
				</Button>
				<span className="text-[13px] text-gray-700">Go back</span>
			</div>
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
			<div className="flex items-center">
				{_STUDIO_SIDEBAR_BUTTONS.map((route, idx) => (
					<TooltipProvider key={idx}>
						<Tooltip delayDuration={0}>
							<TooltipTrigger asChild>
								{renderSidebarButton(route)}
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5} align="start">
								<p>{route.label}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</div>
		</div>
	);
}

export default WidgetEditorNav;
