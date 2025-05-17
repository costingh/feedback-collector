"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { useSubscription } from "@/hooks/useSubscription";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

type Props = {
	planType: string;
	styles?: string;
};

const PaymentButton = ({ planType, styles }: Props) => {
	const { onSubscribe, isProcessing } = useSubscription();

	const openCrispChat = () => {
		const targetDiv = document.querySelector("div[aria-live='polite']");
		const targetLink = targetDiv?.querySelector(
			"a[data-is-failure='false']"
		);

		if (targetLink) {
			console.log("Clicking Crisp link...");
			(targetLink as HTMLAnchorElement).click();
		}
	};

	const handleSubscribeAction = (planType: string) => {
		if (planType == "CUSTOM_ENTERPRISE") {
			openCrispChat();
		} else {
			onSubscribe(planType);
		}
	};

	return (
		<Button
			className={clsx(
				"text-[14px] purple-background w-full",
				styles
			)}
			onClick={() => handleSubscribeAction(planType)}
		>
			{isProcessing ? (
				<>
					<Loader2 className="h-4 w-4 animate-spin" />
					Processing...
				</>
			) : (
				"Subscribe"
			)}
		</Button>
	);
};

export default PaymentButton;
