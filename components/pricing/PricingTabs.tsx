import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PLANS } from "@/app/(pricing)/feedbackz-pricing/constants";
import PlanCard from "./PlanCard";

const PricingTabs: React.FC = () => {
	const [activeTab, setActiveTab] = React.useState("yearly");

	return (
		<Tabs defaultValue="yearly" onValueChange={setActiveTab}>
			<TabsList className="bg-gray-100 rounded-full inline-flex p-1 mb-12">
				<TabsTrigger
					value="yearly"
					className={`w-48 rounded-full px-6 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-200 ${
						activeTab === "yearly" ? "border-2 border-indigo-600" : ""
					}`}
				>
					Pay yearly{" "}
					<span className="text-xs ml-2">(Save 20%)</span>
				</TabsTrigger>
				<TabsTrigger
					value="monthly"
					className={`w-48 rounded-full px-6 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-200 ${
						activeTab === "monthly" ? "border-2 border-indigo-600" : ""
					}`}
				>
					Pay monthly
				</TabsTrigger>
			</TabsList>

			{/* Yearly Plans */}
			<TabsContent value="yearly">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{PLANS.yearly.map((plan : any, idx : number) => (
						<PlanCard key={idx} plan={plan} />
					))}
				</div>
			</TabsContent>

			{/* Monthly Plans */}
			<TabsContent value="monthly">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{PLANS.monthly.map((plan, idx) => (
						<PlanCard key={idx} plan={plan} />
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default PricingTabs;
