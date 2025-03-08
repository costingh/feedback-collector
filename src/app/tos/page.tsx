import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function TermsOfServicePage() {
	return (
		<div className="w-full max-w-[750px] mx-auto px-[20px] py-[40px] text-justify">
			<Link href="/">
				<Button>Back to Website</Button>
			</Link>

			<h1 className="text-gray-100 font-[900] text-[35px] my-4">
				Terms and Conditions for Feedbackz
			</h1>

			<p className="text-gray-300 font-[500] text-[18px]">
				Effective Date: February 10, 2025
				<br />
				<br />
				Introduction
				<br />
				<br />
				These Terms of Service ("Terms") govern your use of the Feedbackz
				website ("Website") and the services provided by Feedbackz.
				ByeDispute is committed to helping users share screen recordings
				with prospects and friends. By using our Website and App, you
				agree to comply with these Terms.
				<br />
				<br />
				1. Acceptance of Terms
				<br />
				<br />
				By accessing or using our Website and App, you accept and agree
				to abide by these Terms and our Privacy Policy, located at
				Privacy Policy. If you do not agree with any part of these
				Terms, please refrain from using our services.
				<br />
				<br />
				2. User Data and Privacy
				<br />
				<br />
				We may collect and store personal information from our users,
				including names, email addresses, payment information, and
				Stripe data. We value your privacy and take data protection
				seriously. Please refer to our Privacy Policy for more
				information on how we collect, use, and protect your data.
				<br />
				<br />
				3. Non-Personal Data Collection
				<br />
				<br />
				Our Website may use web cookies to enhance your experience and
				gather non-personal data for analytics and optimization
				purposes. You can manage cookie preferences through your browser
				settings.
				<br />
				<br />
				4. Updates to Terms
				<br />
				<br />
				We may update these Terms from time to time to reflect changes
				in our services or legal requirements. We will notify users of
				any significant changes via email. Continued use of our Website
				and App after receiving notice of these changes indicates your
				acceptance of the revised Terms.
				<br />
				<br />
				5. Contact Us
				<br />
				<br />
				If you have any questions or concerns about these Terms or our
				services, please contact us at gheorghecostin221@gmail.com.
				<br />
				<br />
				Thank you for using Feedbackz, your partner in colecting and sharing testimonials.
				recordings.
			</p>
		</div>
	);
}

export default TermsOfServicePage;
