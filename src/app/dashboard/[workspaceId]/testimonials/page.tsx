import { getUserTags } from "@/actions/tags";
import { getUserTestimonials } from "@/actions/workspace";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";

type Props = {
	params: { workspaceId: string };
};

const Page = async ({ params: { workspaceId } }: Props) => {
	const query = new QueryClient();

	await query.prefetchQuery({
		queryKey: ["user-tags", workspaceId],
		queryFn: () => getUserTags(workspaceId),
	});

	await query.prefetchQuery({
		queryKey: ["user-testimonials", workspaceId],
		queryFn: () => getUserTestimonials(workspaceId),
	});

	return (
        <HydrationBoundary state={dehydrate(query)}>
            <TestimonialsPage workspaceId={workspaceId} />
        </HydrationBoundary>
    );
};

export default Page;
