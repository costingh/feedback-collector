"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { LandingNavbar } from "../landing-navbar";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { LoadingSpinner } from "../LoadingSpinner";

export default function Waitlist() {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		lastName: "",
	});
	const [isOpened, setIsOpened] = useState(false);
	const [loading, setLoading] = useState(false);

	const addToWaitlist = async () => {
		setLoading(true);
		try {
			const response = await axios.post("/api/email/add-contact", {
				data: {
					email: formData.email,
					firstName: formData.firstName,
					lastName: formData.lastName,
					audienceId: "82ebb73c-74ea-40bf-ae8a-a62bceaef152",
				},
			});
	
			if (!response?.data?.error) {
				toast.success("You are added to the waitlist!");
				setFormData({
					email: "",
					firstName: "",
					lastName: "",
				});
				setIsOpened(false);
			} else {
				toast.error("An error occured!");
			}
		} catch(err) {
			toast.error("An error occured!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="">
			<div className="max-w-[60%] mx-auto">
				<LandingNavbar isWaitlist={true} />
			</div>

			<div className="min-h-[100vh] flex items-center justify-center">
				<div className="flex flex-col items-center justify-center mt-[100px]">
					<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-sm text-white mb-4">
						🔥 Join Feedbackz Waitlist
					</div>
					<h1 className="font-black text-3xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col items-center text-center">
						<span className="relative z-10 text-white">
							Turn Customer Testimonials
							<br />
							<span className="text-5xl lg:text-7xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-400">
								into a Powerful
							</span>
						</span>
						<span className="whitespace-nowrap relative">
							<span className="mr-3 sm:mr-4 md:mr-5 text-white">
								Marketing
							</span>
							<span className="relative whitespace-nowrap">
								<span className="absolute bg-gray-700 bg-opacity-50 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 z-0"></span>
								<span className="relative text-white">
									Tool
								</span>
							</span>
						</span>
					</h1>
					<p className="text-center max-w-2xl leading-normal text-muted-foreground text-xl pt-6 sm:leading-8 my-5">
						<span>
							Don&apos;t miss out—be among the first to boost your
							business with social proof that speaks for itself!
						</span>
						<span className="whitespace-nowrap">
							<span className="inline relative">
								<svg
									width="150"
									className="absolute inset-x-0 -bottom-1.5 translate-y-full fill-green-600"
									viewBox="0 0 666 42"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M220.475 4.24483C147.138 3.4005 73.5014 6.48612 2.51671 19.4427C1.25022 19.6729 0.724462 20.1258 0.62084 20.2294C0.0144608 20.8435 -0.0508949 21.4959 0.0258619 22.0332C0.071916 22.3594 0.382916 23.7372 2.08308 23.8792C3.25746 23.9751 11.5931 23.3035 14.8092 23.1308C29.9495 22.321 45.0593 21.1659 60.1612 19.8303C94.4024 16.8138 128.597 14.204 162.892 11.8284C182.147 10.4928 201.409 9.3875 220.66 8.48177C266.971 9.02291 313.167 11.1338 358.5 13.3136C340.481 14.4228 323.925 15.5473 310.197 16.2765C287.047 17.5046 263.939 18.9552 240.835 20.8665C228.965 21.8451 217.11 22.9083 205.262 24.1632C203.95 24.3052 200.96 24.4511 199.513 24.6238C198.899 24.6928 198.454 24.8042 198.254 24.8809C197.003 25.3645 196.846 26.3546 196.831 26.8535C196.823 27.1567 196.926 28.8108 199.037 29.1332C297.182 44.262 399.576 26.6617 498.074 41.3683C499.229 41.541 500.312 40.7427 500.484 39.5837C500.657 38.4285 499.859 37.3462 498.7 37.1735C405.932 23.3227 309.705 38.133 216.818 27.2604C224.935 26.4736 233.056 25.7636 241.184 25.092C264.246 23.1846 287.311 21.7377 310.423 20.5096C333.68 19.2777 365.12 16.8713 398.029 15.3554C426.272 16.9289 454.499 18.6943 482.746 20.191C494.662 20.8204 506.583 21.3424 518.495 21.9833C523.393 22.2443 535.992 23.3381 537.819 22.9313C539.239 22.6127 539.58 21.5957 539.665 21.0853C539.753 20.5326 539.699 19.8456 539.055 19.1894C538.855 18.9821 538.257 18.5523 537.028 18.1992C503.812 8.6852 449.422 8.83487 398.482 11.1337C387.525 10.5197 376.568 9.93633 365.607 9.41055C340.516 8.20163 315.147 6.98885 289.633 6.03323C361.535 4.25631 433.472 4.76676 505.427 6.05243C535.639 6.59357 617.074 9.85575 649.147 12.738C648.756 13.1409 648.525 13.7013 648.552 14.3115C648.606 15.4782 649.6 16.3839 650.77 16.3302C657.387 16.0232 661.213 15.6317 662.729 15.2287C663.673 14.9793 664.188 14.5801 664.425 14.3192C665.009 13.6898 665.116 13.0143 665.001 12.3733C664.928 11.9742 664.748 11.5367 664.333 11.1337C664.057 10.8574 663.382 10.4353 662.23 10.1474C649.623 7.01191 541.476 2.45636 505.504 1.8116C410.445 0.115274 315.424 -0.230098 220.475 4.24483ZM511.315 17.3625C492.74 14.8411 470.964 13.9545 448.248 14.0121C459.819 14.6837 471.394 15.34 482.972 15.9541C492.417 16.4568 501.866 16.8867 511.315 17.3625ZM132.865 9.72143C108.495 11.5175 84.1514 13.4595 59.7888 15.6087C56.9757 15.8543 54.1664 16.0961 51.3532 16.334C78.2949 13.0335 105.517 10.9342 132.865 9.72143Z"
									></path>
								</svg>
								Join the waitlist today.
							</span>
						</span>
					</p>
					<div className="space-x-4 my-4">
						<button
							onClick={() => setIsOpened(true)}
							className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-[#178389] dark:text-white hover:from-green-400 hover:to-[#178389] h-12 rounded-md px-8 text-lg"
						>
							<span className="pr-1 font-[700]">⚡️</span>
							Get access
						</button>
					</div>

					<div className="relative">
						<Image
							width={1000}
							height={1000}
							alt=""
							src="/demo/demo-create-form.png"
							className="rounded-[15px] mt-10"
						/>
					</div>
				</div>
			</div>

			<Dialog open={isOpened} onOpenChange={() => setIsOpened(false)}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2"></DialogTitle>
						<DialogDescription className="text-left pt-2 space-y-2 text-zinc-900 font-medium">
							<Card className="max-w-md mx-auto">
								<CardHeader>
									<CardTitle>Join the waitlist</CardTitle>
									<CardDescription>
										Be the first to know when we launch.
										Enter your email to get notified.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="space-y-1">
											<Label htmlFor="firstName">
												First Name
											</Label>
											<Input
												id="firstName"
												type="text"
												placeholder="Enter your first name"
												required
												value={formData.firstName}
												onChange={(e) =>
													setFormData((prev) => ({
														...prev,
														firstName:
															e.target.value,
													}))
												}
											/>
										</div>
										<div className="space-y-1">
											<Label htmlFor="lastName">
												Last Name
											</Label>
											<Input
												id="lastName"
												type="text"
												placeholder="Enter your last name"
												required
												value={formData.lastName}
												onChange={(e) =>
													setFormData((prev) => ({
														...prev,
														lastName:
															e.target.value,
													}))
												}
											/>
										</div>
										<div className="space-y-1">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												type="email"
												placeholder="Enter your email"
												required
												value={formData.email}
												onChange={(e) =>
													setFormData((prev) => ({
														...prev,
														email: e.target.value,
													}))
												}
											/>
										</div>
										<Button
											onClick={addToWaitlist}
											className="w-full"
											disabled={loading}
										>
											{!loading ? (
												"Join Waitlist"
											) : (
												<div className="flex items-center justify-center">
													<LoadingSpinner />
												</div>
											)}
										</Button>
									</div>
								</CardContent>
							</Card>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
				
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
