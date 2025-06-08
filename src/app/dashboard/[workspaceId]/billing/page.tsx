import { getPaymentInfo } from '@/actions/user'
import { PLANS } from '@/app/(website)/feedbackz-pricing/constants'
import React from 'react'

type Props = {}

const BillingPage = async (props: Props) => {
	const payment = await getPaymentInfo()

	return (
		<div className="py-[30px] px-[40px]">
			<div className="border-[1px] border-gray-200 flex flex-col gap-y-8 p-5 rounded-xl">
				<div>
					<h1 className="text-[16px] text-bold">Current Plan</h1>
					<p className="text-gray-400 text-[12px]">
						Your Payment Histroy
					</p>
				</div>
				<div>
					<h1 className="text-[16px] text-bold">
						{PLANS.monthly.find(plan => plan.name?.toUpperCase() === payment?.data?.subscription?.plan?.toUpperCase())?.price}
						/Month
					</h1>
					<p className="text-gray-400 text-[12px]">
						{payment?.data?.subscription?.plan}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BillingPage
