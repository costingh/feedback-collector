import { Loader2, Network, PlusSquare } from "lucide-react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../animations/loading-spinner";

function generateUniqueId(length = 8) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let uniqueId = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		uniqueId += characters[randomIndex];
	}
	return uniqueId;
}

export function CreateWidgetModal({
	loading,
	selectedIds,
	section,
	predefinedWidgetType,
	workspaceId,
}: {
	loading: any;
	selectedIds: string[];
	section?: string;
	predefinedWidgetType?: string;
	workspaceId: string;
}) {
	const router = useRouter();
	const [creatingWidget, setCreatingWidget] = useState(false);
	const [formValue, setFormValue] = useState({
		name: "",
		target: "",
	});
	const [widgetType, setWidgetType] = useState(predefinedWidgetType || "");

	const handleCreateWidget = async () => {
		setCreatingWidget(true);

		if (!formValue.name) {
			toast.error("Please enter a name");
			setCreatingWidget(false);
			return;
		}

		if (!widgetType) {
			toast.error("Please select the type of the widget");
			setCreatingWidget(false);
			return;
		}

		try {
			const response = await axios.post("/api/widgets/create", {
				data: {
					name: formValue.name,
					target: formValue.target,
					url: "/" + generateUniqueId(7),
					type: widgetType,
					testimonialsIds: selectedIds,
					workspaceId,
					variant: 'elite'
				},
			});

			const createdWidget = response?.data?.result;

			if (!createdWidget) {
				toast.error("Widget could not be created!");
				setCreatingWidget(false);
				return;
			}

			toast.success("Widget created successfully");
			setFormValue({
				name: "",
				target: "",
			});
			router.push(`/dashboard/${workspaceId}/share/edit/${createdWidget.url}`);
		} catch (e) {
			console.error(e);
			toast.error("Could not create widget");
		} finally {
			setCreatingWidget(false);
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				{section == "creator" ? (
					<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
						<PlusSquare size={14} className="text-gray-800" />
						<span className="text-[13px] font-[500] whitespace-nowrap">
							Start creating
						</span>
					</div>
				) : (
					<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]">
						<Network size={14} className="text-gray-200" />
						<span className="text-gray-200 font-[400] text-[13px]">
							{loading.action == "share" && loading.loading ? (
								<Loader2
									size={11}
									className="spin my-[4px] mx-[4px]"
								/>
							) : (
								"Share"
							)}
						</span>
					</div>
				)}
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Create a widget</DialogTitle>
					<DialogDescription>
						Name this widget so you can find it later in Saved
					</DialogDescription>
				</DialogHeader>

				<div>
					<span className="text-gray-500 font-[500] text-[14px] m-0 p-0">
						Name *
					</span>
					<Input
						id="widget-name"
						value={formValue.name}
						onChange={(e) =>
							setFormValue((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
						placeholder="Ex: Pricing Page Testimonials"
						className="outline-none focus-visible:ring-0 focus-visible:ring-transparent"
					/>

					<div className="divider h-4"></div>

					<span className="text-gray-500 font-[500] text-[14px] m-0 p-0">
						Where do you plan to embed this widget?
					</span>

					<Select
						value={formValue.target}
						onValueChange={(value) =>
							setFormValue((prev) => ({ ...prev, target: value }))
						}
					>
						<SelectTrigger className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent ">
							<SelectValue placeholder="Select target" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Website targets</SelectLabel>
								<SelectItem value="home">Home Page</SelectItem>
								<SelectItem value="pricing">
									Pricing Page
								</SelectItem>
								<SelectItem value="product">
									Product Page
								</SelectItem>
								<SelectItem value="sign-up">
									Sign Up Page
								</SelectItem>
								<SelectItem value="blog">Blog</SelectItem>
								<SelectItem value="all">All Pages</SelectItem>
								<SelectItem value="other">Other</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					{!predefinedWidgetType && (
						<>
							<div className="divider h-4"></div>

							<span className="text-gray-500 font-[500] text-[14px] m-0 p-0">
								Please choose the widget type
							</span>

							<Select
								value={widgetType}
								onValueChange={(value) => setWidgetType(value)}
							>
								<SelectTrigger className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent ">
									<SelectValue placeholder="Choose widget type" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Widget types</SelectLabel>
										<SelectItem value="basic_wall">
											Wall
										</SelectItem>
										<SelectItem value="rolling_wall">
											Carousel
										</SelectItem>
										<SelectItem value="rating_badge">
											Rating Badge
										</SelectItem>
										<SelectItem value="social_star">
											Social Star
										</SelectItem>
										<SelectItem value="hero_quotes">
											Hero Quotes
										</SelectItem>
										<SelectItem value="avatars">
											Avatars
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</>
					)}
				</div>

				<DialogFooter>
					<div
						onClick={handleCreateWidget}
						className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
					>
						{!creatingWidget ? (
							"Create Widget"
						) : (
							<div className="flex items-center justify-center">
								<LoadingSpinner />
							</div>
						)}
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
