"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import TestimonialsList from "./TestimonialsList";
import { LoadingSpinner } from "../LoadingSpinner";

export const SelectTestimonialsToShareModal = ({
	isOpened,
	handleClose,
	testimonials,
	isChecked,
	setChecked,
	tags,
	checkedItems,
    widgetId,
    refreshData
}: {
	isOpened: boolean;
	handleClose: any;
	testimonials: any;
	isChecked: any;
	setChecked: any;
	tags: any;
	checkedItems: any;
    widgetId: string;
    refreshData?: any
}) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleUpdate = async () => {
        setIsLoading(true)

        try {
            const response = await axios.post("/api/widgets/update", {
                data: {
                    widgetId: widgetId,
                    testimonialsIds: Array.from(checkedItems),
                },
            });
    
            const resp = response?.data?.updatedWidget;
    
            if(resp) {
                refreshData && refreshData()
                handleClose()
                toast.success('Success')
            } else {
                toast.error('Error')
            }
        } catch(error) {
            console.log(error)
            toast.error(JSON.stringify(error))
        } finally {
            setIsLoading(false)
        }
    }

	return (
		<Dialog open={isOpened} onOpenChange={handleClose}>
			<DialogContent className="max-w-[980px]">
				<DialogHeader>
					<DialogTitle className="flex justify-between items-between flex-col gap-y-4 pb-2">
						<div className="flex items-center gap-x-2 font-bold text-xl">
							Approved testimonials
						</div>
						<p className="text-[15px] text-gray-600 font-normal">New testimonials that you approve will automatically get added to this widget</p>
					</DialogTitle>
					<DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
						<TestimonialsList
							testimonials={testimonials}
							tags={tags}
							isChecked={isChecked}
							setChecked={setChecked}
							checkedItems={checkedItems}
						/>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<div onClick={handleUpdate} className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-10 hover:opacity-80 max-w-[200px]">
						{!isLoading ? (
							"Apply changes"
						) : (
							<div className="flex items-center justify-center">
								<LoadingSpinner />
							</div>
						)}
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
