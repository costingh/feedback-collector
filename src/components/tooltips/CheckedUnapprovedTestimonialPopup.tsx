import { TriangleAlert } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface CheckedUnapprovedTestimonialPopupProps {

}

export function CheckedUnapprovedTestimonialPopup({

}: CheckedUnapprovedTestimonialPopupProps) {

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <div className="rounded-[6px] p-1 bg-yellow-200 cursor-pointer">
                        <TriangleAlert className="text-yellow-600" size={15} />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>This testimonial is not approved yet. Please approve it to display it on your widget.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
