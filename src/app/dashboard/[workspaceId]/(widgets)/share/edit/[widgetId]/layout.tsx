import React from 'react'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query'
import { getUserWidget } from '@/actions/widgets'

type Props = {
	params: { widgetId: string }
	children: React.ReactNode
}

const Layout = async ({ params: { widgetId }, children }: Props) => {
	const query = new QueryClient()

	// await query.prefetchQuery({
	// 	queryKey: ["edit-widget"],
	// 	queryFn: () => getUserWidget('/' + widgetId),
	// });

	return (
		<HydrationBoundary state={dehydrate(query)}>
			{children}
		</HydrationBoundary>
	)
}

export default Layout
