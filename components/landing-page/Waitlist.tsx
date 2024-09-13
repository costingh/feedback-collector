'use client'

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

export default function Waitlist() {
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: ''
	})

	const addToWaitlist = async () => {
	
		const response = await axios.post("/api/email/add-contact", {
			data: {
				email: formData.email, 
				firstName: formData.firstName, 
				lastName: formData.lastName, 
				audienceId: "82ebb73c-74ea-40bf-ae8a-a62bceaef152"
			},
		});

		

		if(!response?.data?.error) {
			toast.success('You are added to the waitlist!')
			setFormData({
				email: '',
				firstName: '',
				lastName: ''
			})
		} else {
			toast.error('An error occured!')
		}
	}


	return (
		<div className="min-h-[100vh] flex items-center justify-center">
			<Card className="max-w-md mx-auto ">
				<CardHeader>
					<CardTitle>Join the waitlist</CardTitle>
					<CardDescription>
						Be the first to know when we launch. Enter your email to
						get notified.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								type="text"
								placeholder="Enter your first name"
								required
								value={formData.firstName}
								onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="lastName">Last Name</Label>
							<Input
								id="lastName"
								type="text"
								placeholder="Enter your last name"
								required
								value={formData.lastName}
								onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
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
								onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
							/>
						</div>
						<Button onClick={addToWaitlist} className="w-full">
							Join Waitlist
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
