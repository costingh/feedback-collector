import { Braces, Copy, Link, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Form } from "@/types/Form";
import CodeSnippet from "./code-snippet";

const ShareFormModal = ({
	form,
	formUrl,
	handleCopy,
}: {
	form: Form;
	formUrl: string;
	handleCopy: (url: string) => void;
}) => {
	const [isActive, setIsActive] = useState("share");
	const [embeddingType, setEmbeddingType] = useState(1);

	const width = "100%";
	const height = "100%";
	const allow = "camera;microphone";
	
	const inlineIframeCode = `<feedbackz-form data-widget-type="inline" data-form-id="${form?.url?.replace('/p/', '')}"></feedbackz-form>\n<script src="${process.env.NEXT_PUBLIC_HOST_URL}/form-embed.iife.js?formId=${form?.url?.replace('/p/', '')}"></script>`
	
	const popupIframeCode = `<feedbackz-form data-widget-type="centered-popup" data-form-id="${form?.url?.replace('/p/', '')}"></feedbackz-form>\n<script src="${process.env.NEXT_PUBLIC_HOST_URL}/form-embed.iife.js?formId=${form?.url?.replace('/p/', '')}"></script>`
	
	const chatStyleIframeCode = `<feedbackz-form data-form-id="${form?.url?.replace('/p/', '')}" data-widget-type="chat-style-floading-widget"></feedbackz-form>\n<script src="${process.env.NEXT_PUBLIC_HOST_URL}/form-embed.iife.js?formId=${form?.url?.replace('/p/', '')}"></script>`
	
	const [code, setCode] =
		useState(embeddingType == 1 ? inlineIframeCode : embeddingType == 2 ? popupIframeCode : chatStyleIframeCode);

	useEffect(() => {
		setCode(embeddingType == 1 ? inlineIframeCode : embeddingType == 2 ? popupIframeCode : chatStyleIframeCode)
	}, [embeddingType])

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
					<Share2 size={14} className="text-green-500" />
					<div className="text-[13px] font-[500]">Share</div>
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[1200px]">
				<DialogHeader>
					<DialogTitle>Share your form</DialogTitle>
					{/* <DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription> */}
				</DialogHeader>

				<div className="flex max-w-[calc(1200px-50px)]">
					<div className="w-[30%]">
						<div
							className="rounded-[15px] hover:bg-gray-100 cursor-pointer py-3 px-4 flex gap-3 mb-4"
							style={
								isActive == "share"
									? { background: "rgb(229 231 235)" }
									: {}
							}
							onClick={() => setIsActive("share")}
						>
							<Link
								className="text-gray-600 mt-[2px]"
								size={18}
							/>
							<div className="flex flex-col gap-[8px]">
								<h1 className="text-gray-800 font-[600] text-[14px]">
									Share the link
								</h1>
								<span className="text-gray-600 font-[400] text-[13px]">
									Share your link on social media, your
									website, or anywhere else.
								</span>
							</div>
						</div>
						<div
							className="rounded-[15px] hover:bg-gray-100 cursor-pointer py-3 px-4 flex gap-3 mb-4"
							style={
								isActive == "embed"
									? { background: "rgb(229 231 235)" }
									: {}
							}
							onClick={() => setIsActive("embed")}
						>
							<Braces
								className="text-gray-600 mt-[2px]"
								size={18}
							/>
							<div className="flex flex-col gap-[8px]">
								<h1 className="text-gray-800 font-[600] text-[14px]">
									Embed
								</h1>
								<span className="text-gray-600 font-[400] text-[13px]">
									Embed the form on your website to collect
									testimonials.
								</span>
							</div>
						</div>
					</div>
					<div className="w-[70%] pl-6">
						{/* SHARE FORM TAB */}
						{isActive == "share" && (
							<div className="border-[1px] border-gray-100 p-4 rounded-[15px]">
								<h1 className="text-gray-800 font-[600] text-[14px]">
									Link to your form
								</h1>
								<span className="text-gray-600 font-[400] text-[13px]">
									Click to copy and paste your form link.
								</span>
								<div className="flex items-center space-x-2 mt-2">
									<div className="grid flex-1 gap-2">
										<Label
											htmlFor="link"
											className="sr-only"
										>
											Link
										</Label>
										<Input
											id="link"
											defaultValue={formUrl}
											readOnly
											className="outline-none focus-visible:ring-0 focus-visible:ring-transparent"
										/>
									</div>
									<Button
										size="sm"
										className="px-3"
										onClick={() => handleCopy(formUrl)}
									>
										<span className="sr-only">Copy</span>
										<Copy className="h-4 w-4" />
									</Button>
								</div>
							</div>
						)}

						{/* EMBED FORM TAB */}
						{isActive == "embed" && (
							<div className="w-full">
								<h1 className="text-gray-800 font-[600] text-[14px]">
									How would you like to embed your form?
								</h1>
								<span className="text-gray-600 font-[400] text-[13px]">
									You can embed your form as an inline embed
									or as a popup widget.
								</span>
								<div className="flex items-center space-x-2 mt-2">
									<div
										className="left w-[50%] rounded-[10px] border-[1px] border-gray-200 p-4 cursor-pointer hover:bg-gray-100 h-[234px]"
										onClick={() => setEmbeddingType(1)}
										style={
											embeddingType == 1
												? {
														background:
															"rgb(243 244 246",
												  }
												: {}
										}
									>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-[100px] bg-green-400 w-[150px] mx-auto rounded w-ful my-4"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
									</div>
									<div
										className="right w-[50%] rounded-[10px] border-[1px] border-gray-200 p-4 cursor-pointer hover:bg-gray-100 h-[234px] relative"
										onClick={() => setEmbeddingType(2)}
										style={
											embeddingType == 2
												? {
														background:
															"rgb(243 244 246",
												  }
												: {}
										}
									>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>

										<div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center">
											<div className="h-[100px] bg-green-400 w-[150px] rounded"></div>
										</div>
									</div>
									<div
										className="right w-[50%] rounded-[10px] border-[1px] border-gray-200 p-4 cursor-pointer hover:bg-gray-100 h-[234px] relative"
										onClick={() => setEmbeddingType(3)}
										style={
											embeddingType == 2
												? {
														background:
															"rgb(243 244 246",
												  }
												: {}
										}
									>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>
										<div className="h-2 bg-gray-200 rounded w-ful mt-1"></div>

										<div className="absolute bottom-[20px] left-[20px] w-[40px] h-[40px] rounded-full bg-green-400">
										</div>
									</div>
								</div>

								<h1 className="text-gray-800 font-[600] text-[14px] mt-3">
									Your Code Snippet
								</h1>
								<span className="text-gray-600 font-[400] text-[13px]">
									To embed your collection form, paste the
									following code snippet anywhere in the body
									of your website:
								</span>
								<CodeSnippet
									handleCopy={handleCopy}
									code={code}
								/>
							</div>
						)}
					</div>
				</div>

				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default ShareFormModal