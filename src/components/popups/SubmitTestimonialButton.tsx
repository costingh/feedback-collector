import { RocketIcon } from "@/app/(website)/_components/icons/rocket-icon";
import {
	Loader2,
} from "lucide-react";

export const SubmitTestimonialButton = ({
    buttonLabel,
    handleSubmit,
    loading,
    primaryColor
}: {
    buttonLabel: string | undefined;
    handleSubmit: any;
    loading?: boolean;
    primaryColor: string;
}) => (
    <button
        onClick={handleSubmit}
        disabled={loading}
        className="p-2.5 rounded-lg text-gray-50 w-full mt-2.5 font-medium tracking-wide text-[15px] flex items-center gap-4 justify-center"
        style={{ backgroundColor: primaryColor }}
    >
        {loading ? <Loader2 className="spin" /> : <><div>{buttonLabel}</div> <RocketIcon /></>}
    </button>
);