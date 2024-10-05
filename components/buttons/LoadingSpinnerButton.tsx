import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type LoadingSpinnerButtonProps = {
    loading: boolean,
    handleSubmit: any
}
function LoadingSpinnerButton({loading, handleSubmit} : LoadingSpinnerButtonProps) {
	return (
		<div className="flex justify-end">
			{loading ? (
				<Button
					disabled
					className="w-full bg-black flex items-center gap-2 hover:bg-gray-900"
				>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Submitting
				</Button>
			) : (
				<Button
					onClick={handleSubmit}
					className="w-full bg-black flex items-center gap-2 hover:bg-gray-900"
				>
					Submit
				</Button>
			)}
		</div>
	);
}

export default LoadingSpinnerButton;
