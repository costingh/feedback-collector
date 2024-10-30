import { Braces, Copy, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import CodeSnippet from "../testimonials/CodeSnippet";
import useCopy from "@/hooks/useCopy";

export function ShareWidgetModal({ children, widgetUrl }: { children: React.ReactNode; widgetUrl: string }) {
	const [isActive, setIsActive] = useState("share");
	const [embeddingType, setEmbeddingType] = useState(1);
	const embedCode = `<div data-widget="feedbackz-widget" data-widget-id="${widgetUrl}"></div>\n<script src="${process.env.NEXT_PUBLIC_APP_DOMAIN}/widget-embed.js"></script>`
	const { copied, handleCopy } = useCopy();

	// Helper to render tab content for Share and Embed sections
	const renderTabContent = () => {
		if (isActive === "share") {
			return (
				<div className="border border-gray-100 p-4 rounded-lg">
					<h1 className="text-gray-800 font-semibold text-sm">Link to your widget</h1>
					<p className="text-gray-600 font-normal text-xs">Click to copy and paste your widget link.</p>
					<div className="flex items-center space-x-2 mt-2">
						<Input id="link" value={process.env.NEXT_PUBLIC_APP_DOMAIN  + '/w' + widgetUrl} readOnly className="outline-none focus:ring-0" />
						<Button size="sm" className="px-3" onClick={() => handleCopy(process.env.NEXT_PUBLIC_APP_DOMAIN  + '/w' + widgetUrl)}>
							<Copy className="h-4 w-4" />
						</Button>
					</div>
				</div>
			);
		}
		return (
			<div className="w-full">
				<h1 className="text-gray-800 font-semibold text-sm">How would you like to embed your widget?</h1>
				<p className="text-gray-600 font-normal text-xs">You can embed your widget as an inline embed fot the moment.</p>
				<div className="flex items-center space-x-2 mt-2">
					{renderEmbedOption(1)}
					{/* {renderEmbedOption(2)} */}
				</div>
				<h1 className="text-gray-800 font-semibold text-sm mt-3">Your Code Snippet</h1>
				<p className="text-gray-600 font-normal text-xs">To embed your testimonials, paste the following code snippet in the body of your website:</p>
				<CodeSnippet code={embedCode} handleCopy={handleCopy} />
			</div>
		);
	};

	// Helper to render embed options
	const renderEmbedOption = (type: number) => {
		const isActiveEmbed = embeddingType === type;
		const style = isActiveEmbed ? { backgroundColor: "rgb(243, 244, 246)" } : {};
		return (
			<div
				className="w-1/2 rounded-lg border border-gray-200 p-4 cursor-pointer hover:bg-gray-100 relative"
				style={style}
				onClick={() => setEmbeddingType(type)}
			>
				<div className="flex flex-col space-y-1">
					{Array(6)
						.fill("")
						.map((_, i) => (
							<div key={i} className="h-2 bg-gray-200 rounded w-full"></div>
						))}
				</div>
				<div className="h-[100px] bg-green-400 w-[150px] mx-auto rounded my-4"></div>
			</div>
		);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-[1200px]">
				<DialogHeader>
					<DialogTitle>Share your testimonials</DialogTitle>
				</DialogHeader>
				<div className="flex max-w-[calc(1200px-50px)]">
					<div className="w-1/3">
						{renderTab("share", "Share the link", "Share your link on social media, your website, or anywhere else.", <Link size={18} />)}
						{renderTab("embed", "Embed", "Embed the widget on your website to showcase testimonials.", <Braces size={18} />)}
					</div>
					<div className="w-2/3 pl-6">{renderTabContent()}</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);

	// Helper to render sidebar tabs
	function renderTab(key: string, title: string, description: string, icon: React.ReactNode) {
		const isActiveTab = isActive === key;
		const style = isActiveTab ? { backgroundColor: "rgb(229, 231, 235)" } : {};
		return (
			<div
				className="rounded-lg hover:bg-gray-100 cursor-pointer py-3 px-4 flex gap-3 mb-4"
				style={style}
				onClick={() => setIsActive(key)}
			>
				{icon}
				<div className="flex flex-col gap-2">
					<h1 className="text-gray-800 font-semibold text-sm">{title}</h1>
					<p className="text-gray-600 font-normal text-xs">{description}</p>
				</div>
			</div>
		);
	}
}
