import { Button } from "@/components/ui/button";
import Link from "next/link";

type ButtonType = {
	text: string;
	href: string;
	variant: "outlined" | "solid";
};

const SignUpButton: React.FC<ButtonType> = ({ variant, href, text }) => {
	return (
		<Link href={href}>
			<Button
				className={`font-fredoka rounded-[14px] border-[1px] px-[18px] py-[0px] text-white text-[13px] font-bold hover:bg-white hover:text-indigo-600 ${
					variant === "solid"
						? "bg-indigo-600 border-indigo-600"
						: "bg-transparent border-indigo-600 text-indigo-600"
				}`}
			>
				{text}
			</Button>
		</Link>
	);
};

export default SignUpButton;
