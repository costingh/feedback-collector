import { getUserTags } from '@/actions/tags'
import { getUserTestiImportCounter, getUserTestimonials } from '@/actions/workspace'
import ImportTestimonialsPage from '@/components/testimonials/ImportTestimonialsPage'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query'

type Props = {
	params: { workspaceId: string }
}

const Page = async ({ params: { workspaceId } }: Props) => {
	const query = new QueryClient()

	await query.prefetchQuery({
		queryKey: ['user-tags', workspaceId],
		queryFn: () => getUserTags(workspaceId),
	})

	await query.prefetchQuery({
		queryKey: ['user-testimonials', workspaceId],
		queryFn: () => getUserTestimonials(workspaceId),
	})

	await query.prefetchQuery({
		queryKey: ['user-testi-import-counter', workspaceId],
		queryFn: () => getUserTestiImportCounter(workspaceId),
	})

	return (
		<HydrationBoundary state={dehydrate(query)}>
			<ImportTestimonialsPage workspaceId={workspaceId} />
		</HydrationBoundary>
	)
}

export default Page
