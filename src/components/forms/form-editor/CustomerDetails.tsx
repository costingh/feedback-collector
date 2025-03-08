"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/types/Form";

interface CustomerDetailsProps {
	setForm: React.Dispatch<React.SetStateAction<Form>>;
	form: Form;
}

import options from "./CustomerDetailsOptionList";
import { Option } from "@/types/Option";

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ setForm, form }) => {

	const handleCheck = (
		option: Option, 
		type: "enable" | "required"
	) => {
		setForm(prev => ({
			...prev,
			formFields: prev.formFields.map(field =>
				field.key === option.key
					? type === "enable"
						? { ...field, isEnabled: !field.isEnabled }
						: { ...field, isRequired: !field.isRequired }
					: field
			),
		}));
	};

	const getAllOptions = (): Option[] => {
		return options.map(option => ({
			...option,
			...(form?.formFields?.find(ao => ao.key === option.key) || {}),
		}));
	};

	const renderTesimonialCollectorElementOption = (): JSX.Element => {
		return (
			<>
				{getAllOptions().map((option, index) => (
					<div key={index}>
						{!option.alwaysRequired && (
							<div className="flex items-start gap-2 mb-4">
								{option.icon}
								<div>
									<div className="flex justify-between">
										<p className="text-[14px] font-[600] text-[#000]">
											{option.text}
										</p>
										<div className="flex items-center gap-2">
											<div className="flex items-center space-x-1">
												<Checkbox
													id={`checked_${option.text}`}
													checked={option.isEnabled}
													className="w-[15px] h-[15px] rounde-[4px]"
													onClick={() =>
														handleCheck(
															option,
															"enable"
														)
													}
												/>
												<label
													htmlFor={`checked_${option.text}`}
													className="text-[12px] font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Enable
												</label>
											</div>
											<div className="flex items-center space-x-1">
												<Checkbox
													id={`required_${option.text}`}
													checked={option.isRequired}
													className="w-[15px] h-[15px] rounde-[4px]"
													onClick={() =>
														handleCheck(
															option,
															"required"
														)
													}
												/>
												<label
													htmlFor={`required_${option.text}`}
													className="text-[12px] font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Required
												</label>
											</div>
										</div>
									</div>
									<p className="text-[13px] font-normal text-gray-400 leading-[17px] mt-[4px]">
										{option.description}
									</p>
								</div>
							</div>
						)}
						{index !== form?.formFields?.length - 1 &&
							!option.alwaysRequired && (
								<div className="h-[1px] w-full bg-gray-200 mb-4"></div>
							)}
					</div>
				))}
			</>
		);
	};

	return (
		<div className="w-full">
			<div className="flex items-start gap-2">
				<div>{renderTesimonialCollectorElementOption()}</div>
			</div>
		</div>
	);
};

export default CustomerDetails;
