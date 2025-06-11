'use client'

import { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getUserWidget } from '@/actions/widgets'
import { cn, needsDarkBackground } from '@/lib/utils'
import WidgetEditorNav from '@/components/widgets/WidgetEditorNav'
import { ShareWidgetModal } from '@/components/widgets/ShareWidgetModal'
import { SelectTestimonialsToShareModal } from '@/components/testimonials/SelectTestimonialsToShareModal'
import DisplayWidget from '@/components/widgets/DisplayWidget'
import { LoadingSpinner } from '../animations/loading-spinner'
import WidgetEditorSidebar from './WidgetEditorSidebar'
import clsx from 'clsx'
import { TagsProvider, useTagsContext } from '@/contexts/TagsContext'

const EditWidget = ({ widgetId, workspaceId, initialData }: any) => {
	const [deviceResolution, setDeviceResolution] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})
	const [hasInteracted, setHasInteracted] = useState(false)
	const [activeSubmenu, setActiveSubmenu] = useState<string>('')
	const [checkedItems, setChecked] = useState<Set<string>>(new Set())
	const [currentWidget, setCurrentWidget] = useState<any>(null)

	const { testimonialsResponse, formsData } = initialData

	const {
		data: widgetData,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ['widget', widgetId],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await getUserWidget(`/${widgetId}`, pageParam, 6)
			return response
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			if (lastPage?.pagination?.hasMore) {
				return lastPage.pagination.page + 1
			}
			return undefined
		},
		initialData: {
			pages: [initialData.widgetResponse],
			pageParams: [1],
		},
	})

	useEffect(() => {
		if (widgetData?.pages?.[widgetData?.pages?.length - 1]?.widget) {
			console.log('widgetData=', widgetData)
			// Combine testimonials from all pages
			const allTestimonials = widgetData.pages.flatMap(
				(page) => page.widget.testimonials || [],
			)
			setCurrentWidget({
				...widgetData.pages[widgetData?.pages?.length - 1].widget,
				testimonials: allTestimonials,
				_count: {
					...widgetData.pages[widgetData?.pages?.length - 1].widget
						._count,
					testimonials: allTestimonials.length,
				},
			})
			setChecked(
				new Set(
					widgetData.pages[
						widgetData?.pages?.length - 1
					].allTestimonialsIds,
				),
			)
		}
	}, [widgetData])

	// Resize Listener
	useEffect(() => {
		const handleResize = () => {
			setDeviceResolution({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handlePageChange = () => {
		fetchNextPage()
	}

	if (!widgetData?.pages?.[widgetData.pages?.length - 1]?.widget) return null

	return (
		<TagsProvider
			workspaceId={
				widgetData.pages[widgetData.pages?.length - 1].widget
					.workspaceId
			}
		>
			<EditWidgetContent
				widgetResponse={widgetData.pages[widgetData.pages?.length - 1]}
				testimonialsResponse={testimonialsResponse}
				formsData={formsData}
				currentWidget={currentWidget}
				deviceResolution={deviceResolution}
				activeSubmenu={activeSubmenu}
				setActiveSubmenu={setActiveSubmenu}
				checkedItems={checkedItems}
				isLoading={isFetching}
				isFetching={isFetchingNextPage}
				paginationData={
					widgetData?.pages[widgetData.pages?.length - 1].pagination
				}
				setHasInteracted={setHasInteracted}
				setDeviceResolution={setDeviceResolution}
				setCurrentWidget={setCurrentWidget}
				hasMore={hasNextPage}
				onLoadMore={fetchNextPage}
				setPage={handlePageChange}
				setChecked={setChecked}
				widgetId={widgetId}
				workspaceId={workspaceId}
			/>
		</TagsProvider>
	)
}

const EditWidgetContent = ({
	widgetResponse,
	testimonialsResponse,
	formsData,
	currentWidget,
	deviceResolution,
	activeSubmenu,
	setActiveSubmenu,
	checkedItems,
	isLoading,
	isFetching,
	paginationData,
	setHasInteracted,
	setDeviceResolution,
	setCurrentWidget,
	hasMore,
	onLoadMore,
	setPage,
	setChecked,
	widgetId,
	workspaceId,
}: any) => {
	const { tags, groupedTags } = useTagsContext()

	return (
		<div
			onClick={() => setHasInteracted(true)}
			className={clsx(
				'relative min-h-screen',
				needsDarkBackground(currentWidget)
					? 'bg-[#101010]'
					: 'bg-gray-100',
			)}
		>
			<WidgetEditorNav
				deviceResolution={deviceResolution}
				setDeviceResolution={setDeviceResolution}
				setActiveSubmenu={setActiveSubmenu}
				workspaceId={workspaceId}
			/>

			<div className="flex h-[calc(100vh-100px)] overflow-hidden">
				<WidgetEditorSidebar
					widget={currentWidget}
					setWidget={setCurrentWidget}
					paginationData={paginationData}
				/>
				<div className="flex items-center justify-center p-4 pb-10 w-[calc(100%-300px)] overflow-auto">
					<div
						style={{
							width: `${deviceResolution.width}px`,
							height: `${deviceResolution.height}px`,
						}}
						className={clsx(
							'p-2 max-w-full max-h-full hide-scrollbar',
							[375, 768].includes(deviceResolution.width) &&
								'border-2 rounded-2xl overflow-y-auto overflow-x-hidden',
							needsDarkBackground(currentWidget)
								? 'border-white'
								: 'border-black',
						)}
					>
						<ShareWidgetModal
							widgetUrl={widgetResponse?.widget?.url || ''}
							isOpened={activeSubmenu === 'share_widget'}
							handleClose={() => setActiveSubmenu('')}
						/>

						<SelectTestimonialsToShareModal
							isOpened={activeSubmenu === 'select_testimonials'}
							handleClose={() => setActiveSubmenu('')}
							testimonials={testimonialsResponse?.data || []}
							isChecked={(id: string) => checkedItems.has(id)}
							tags={tags}
							groupedTags={groupedTags}
							setChecked={setChecked}
							checkedItems={checkedItems}
							widgetId={widgetResponse?.widget?.id}
							userForms={formsData?.data?.forms || []}
						/>

						{isLoading ? (
							<div className="w-full h-full flex items-center justify-center">
								<span className="inline-block">
									<LoadingSpinner
										size={30}
										className={cn(
											needsDarkBackground({
												...currentWidget,
											})
												? 'text-white'
												: 'text-black',
										)}
									/>
								</span>
							</div>
						) : (
							<DisplayWidget
								widget={{
									...currentWidget,
									deviceWidth: deviceResolution.width,
								}}
								setPage={setPage}
								isFetching={isFetching}
								paginationData={paginationData}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditWidget
