import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function PrivacyPolicyPage() {
	return (
		<div className="w-full max-w-[750px] mx-auto px-[20px] py-[40px] text-justify">
			<Link href="/">
				<Button>Back to Website</Button>
			</Link>

			<h1 className="text-gray-900 font-[900] text-[35px] my-4">
				Privacy Policy for Feedbackz
			</h1>

			<p className="text-gray-700 font-[500] text-[18px]">
				Privacy Policy
				<br />
				<br />
				Effective Date: February 10, 2025
				<br />
				<br />
				Introduction
				<br />
				<br />
				Welcome to Feedbackz! This Privacy Policy outlines how we
				collect, use, and protect your data when you use our website at
				https://feedbackz.co and our services.
				<br />
				<br />
				Data Collection
				<br />
				<br />
				We may collect the following user data for the purposes of order
				processing and service use:
				<br />
				<br />
				Name: We collect your name to personalize your user experience
				and for order processing. Email: Your email is collected for
				communication purposes and to send important service updates.
				Payment Information: We collect payment information to process
				transactions and provide our services. Non-Personal Data
				Collection
				<br />
				<br />
				We may use web cookies to collect non-personal data for
				analytics and to optimize your experience. You can manage your
				cookie preferences through your browser settings.
				<br />
				<br />
				Data Sharing
				<br />
				<br />
				We do not share your data with any other parties. Your privacy
				is important to us, and we ensure that your information remains
				confidential.
				<br />
				<br />
				Children's Privacy
				<br />
				<br />
				We do not knowingly collect data from individuals under the age
				of 18. Our services are intended for adult users.
				<br />
				<br />
				Updates to Privacy Policy
				<br />
				<br />
				We may update this Privacy Policy as needed to reflect changes
				in our services or to comply with legal requirements. Users will
				be informed of significant updates via email. Continued use of
				our services after receiving notice of these changes indicates
				your acceptance of the revised Privacy Policy.
				<br />
				<br />
				Contact Us
				<br />
				<br />
				If you have any questions or concerns regarding this Privacy
				Policy or our data practices, please contact us at
				gheorghe.costin2001@yahoo.com.
				<br />
				<br />
				Thank you for using Feedbackz, your partner in collecting
				testimonials.
			</p>
		</div>
	)
}

export default PrivacyPolicyPage
