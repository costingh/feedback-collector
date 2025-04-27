import { Widget } from "@prisma/client";
import SimpleAvatarsVariant from "../widgets/SimpleAvatarsVariant";
import EliteAvatarsVariant from "../widgets/EliteAvatarsVariant";

function Avatars({
	transition,
	testimonials,
	widget,
	numberOfReviews
}: {
	transition?: boolean;
	testimonials: any;
	widget: Widget | null | undefined;
	numberOfReviews: string;
}) {
	return (
		<>
			{widget?.variant == "elite" ? (
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
