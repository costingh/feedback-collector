import { RocketIcon } from "@/app/(website)/_components/icons/rocket-icon";
import {
	Loader2,
} from "lucide-react";

export const SubmitTestimonialButton = ({
    buttonLabel,
    handleSubmit,
    loading,
    onInteraction,
    primaryColor
}: {
    buttonLabel: string | undefined;
    handleSubmit: any;
    loading?: boolean;
    onInteraction: any| undefined;
    primaryColor: string;
}) => (
    <button
        onClick={() => {
            handleSubmit();
            if (onInteraction) onInteraction("submitButton");
        }}
        disabled={loading}
        className="p-2.5 rounded-lg text-gray-50 w-full mt-2.5 font-mediumtracking-wide text-[15px] flex items-center gap-4 justify-center"
        style={{ backgroundColor: primaryColor }}
    >
        {loading ? <Loader2 className="spin" /> : <><div>{buttonLabel}</div> <RocketIcon /></>}
    </button>
);