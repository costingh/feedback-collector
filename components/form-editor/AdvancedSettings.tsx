"use client";

import React, { useState } from "react";
import {
	Loader2,
	PauseOctagon,
	Rocket,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { Form } from "@/types/Form";

interface Option {
	key: string;
	text: string;
	description: string;
	isEnabled: boolean;
	icon: JSX.Element;
}

interface AdvancedSettingsProps {
	setForm: React.Dispatch<React.SetStateAction<Form>>;
	form: Form;
}

const options: Option[] = [
	{
		key: "publish",
		text: "Publish the form",
		description:
			"Make the form accessible to users when it is ready to start collecting testimonials.",
		isEnabled: false,
		icon: <Rocket size={18} />,
	},
	{
		key: "pause",
		text: "Pause the form",
		description: "Stop collecting testimonials for a while. You can unpause the form when needed.",
		isEnabled: false,
		icon: <PauseOctagon size={18} />,
	},
];

const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({
	setForm,
	form,
}) => {
    const [isPublishing, setIsPublishing] = useState('')

    const handlePublishForm = async (type : string) => {
        if(!form) return;
		setIsPublishing(type);

        let formData = {
            //@ts-ignore
            ...form,
            //@ts-ignore
            formFields: form.formFields.map((option) => ({
            	key: option.key,
            	isEnabled: option.isEnabled,
            	isRequired: option.isRequired,
            })),
            published: form.published,
            isPaused: form.isPaused,
			questions: form.questions.map(q => ({text: q.text})),
        };

        const published = !form?.published || false;
        const paused = !form?.isPaused || false;

        if(type == 'publish') {
            formData.published = published;
        } else if (type == 'pause') {
            formData.isPaused = paused;
        } else {
            toast.error('Unknown action!')
            return;
        }

		try {
			const response = await axios.post("/api/update-form", {
				formData
			});

			const updatedForm = response?.data?.form;

			if (!updatedForm) {
				toast.error("Changes could not be applied!");
				return;
			}

            if(type == 'publish') {
                setForm(prevState => ({...prevState, published}))
            } else if (type == 'pause') {
                setForm(prevState => ({...prevState, isPaused: paused}))
            }
            
			setIsPublishing('');
		} catch (err) {
			console.error(err);
			setIsPublishing('');
		}

    }

	const renderTesimonialCollectorElementOption = (): JSX.Element => {
		return (
			<>
				{options.map((option, index) => (
					<div key={index}>
						<div className="flex items-start gap-2 mb-4">
							{option.icon}
							<div>
								<div className="flex justify-between">
									<p className="text-[14px] font-[600] text-[#000]">
										{option.text}
									</p>
									<div className="flex items-center gap-2">
										<div className="flex items-center space-x-1">
                                        <div
                                            onClick={() => handlePublishForm(option.key)}
                                            className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[2px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px] text-[11px] font-[400]">
                                                {isPublishing == option.key ? (
                                                    <Loader2
                                                        size={11}
                                                        className="spin my-[4px] mx-[4px]"
                                                    />
                                                ) : (
                                                    <>
                                                        {option.key == 'publish' && (form?.published ? 'Unpublish' : 'Publish')}
                                                        {option.key === 'pause' && (form?.isPaused ? 'Unpause' : 'Pause')}
                                                    </>
                                                )}
									</div>
										</div>
									</div>
								</div>
								<p className="text-[13px] font-normal text-gray-400 leading-[17px] mt-[4px]">
									{option.description}
								</p>
							</div>
						</div>
						{index !== options.length - 1 && (
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

export default AdvancedSettings;
