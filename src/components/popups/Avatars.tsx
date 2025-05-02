import { Widget } from "@prisma/client";
import SimpleAvatarsVariant from "../widgets/SimpleAvatarsVariant";
import EliteAvatarsVariant from "../widgets/EliteAvatarsVariant";
import { needsDarkBackground } from "@/lib/utils";

function Avatars({
	transition,
	testimonials,
	widget,
	numberOfReviews,
}: {
	transition?: boolean;
	testimonials: any;
	widget: Widget & { _count: { testimonials: number } } & { avgStars: number } | null | undefined;
	numberOfReviews: string;
}) {
	return (
		<>
			{needsDarkBackground(widget) ? (
				<EliteAvatarsVariant
					transition={transition}
					testimonials={testimonials}
					widget={widget}
					numberOfReviews={numberOfReviews}
				/>
			) : (
				<SimpleAvatarsVariant
					transition={transition}
					testimonials={testimonials}
					widget={widget}
				/>
			)}
		</>
	);
}

export default Avatars;
