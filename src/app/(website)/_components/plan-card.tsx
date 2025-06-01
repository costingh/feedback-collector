import axios from 'axios'
import { toast } from 'sonner'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import PaymentButton from '@/components/global/payment-button'
import { PLANS } from '../feedbackz-pricing/constants'

export default function PlanCard({ plan }: { plan: any }) {
	return (
		<div
			className={`bg-white border p-8 rounded-lg shadow-lg relative ${
				plan.mostPopular ? 'border-indigo-600' : 'border-gray-200'
			}`}
		>
			{plan.mostPopular && (
				<div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-xs">
					Most popular
				</div>
			)}
			<h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
			<p className="text-gray-500 mb-6">{plan.description}</p>
			<div className="text-4xl font-bold mb-1">{plan.price}</div>
			<p className="text-gray-500 text-sm mb-4">
				/month billed {plan.interval}
			</p>
			
			<PaymentButton
				planType={plan.planType}
				styles={`w-full ${
					plan.mostPopular
						? 'bg-indigo-600 text-white'
						: 'bg-white text-indigo-600 border-indigo-600'
				} hover:bg-indigo-600 hover:text-white transition border-[1px] border-indigo-600 flex items-center justify-center gap-2 rounded-[17px]`}
			/>

			{/* <Button
				className={`w-full ${
					plan.mostPopular
						? "bg-indigo-600 text-white"
						: "bg-white text-indigo-600 border-indigo-600"
				} hover:bg-indigo-600 hover:text-white transition border-[1px] border-indigo-600 flex items-center justify-center gap-2 rounded-[17px]`}
				onClick={() => onSubscribe(plan)}
				disabled={loading} // Disable button when loading
			>
				{loading ? (
					<>
						<Loader2 className="h-4 w-4 animate-spin" />
						Processing...
					</>
				) : (
					"Subscribe"
				)}
			</Button> */}

			<ul className="mt-6 space-y-2 text-left text-gray-600">
				{plan.details.map((detail: string, idx: number) => (
					<li key={idx}>✔ {detail}</li>
				))}
			</ul>
		</div>
	)
}
