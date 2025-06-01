'use client'

import { Eye } from 'lucide-react'
import { formatNumber, tagCategories, timeAgo } from '@/lib/utils'
import { ConfirmDeleteTag } from '@/components/tags/ConfirmDeleteTag'
import { EditTag } from '@/components/tags/EditTag'
import { useTags } from '@/hooks/useTags'
import Loader from '@/components/global/loader'
import { CreateTagModal } from '@/components/tags/CreateTagModal'
import { LoadingSpinner } from '@/components/animations/loading-spinner'

type Props = {
	params: { workspaceId: string }
}

const Page = ({ params: { workspaceId } }: Props) => {
	const {
		handleCreateTag: createTag,
		isSearchingTags,
		tags,
		groupedTags,
		creatingTag,
		handleDeleteTag,
		handleEditTag,
	} = useTags(workspaceId)

	return (
		<div className="px-8 py-5 relative">
			<div className="mb-8 space-y-4 flex items-center justify-between">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col ">
						<h2 className="text-[18px] font-bold">Your tags ✨</h2>
						<p className="text-gray-500 font-light text-[14px]">
							Tags help you organize your testimonials.
						</p>
					</div>
				</div>
				<CreateTagModal
					workspaceId={workspaceId}
					createTag={createTag}
					creatingTag={creatingTag}
				/>
			</div>

			{isSearchingTags ? (
				<div className="w-full h-full flex items-center justify-center">
					<span className="inline-block">
						<LoadingSpinner size={30} />
					</span>
				</div>
			) : (
				<>
					{tags?.length ? (
						<div className="flex w-full">
							<div className="w-full border-[1px] border-gray-200 rounded-t-[10px]">
								{Object.keys(groupedTags).map(
									(category, index) => (
										<div key={category}>
											<div
												className="w-full border-b-[1px] py-2 px-4 border-gray-200 h-[60px] cursor-pointer bg-gray-100"
												style={
													index == 0
														? {
																borderTopLeftRadius:
																	'10px',
																borderTopRightRadius:
																	'10px',
															}
														: {}
												}
											>
												<h1 className=" text-[14px] text-zinc-900 font-semibold">
													{tagCategories.find(
														(c) =>
															c.name == category,
													)?.emoji +
														' ' +
														category}
												</h1>
												<p className="text-[12px] text-300 text-gray-400">
													{
														tagCategories.find(
															(c) =>
																c.name ==
																category,
														)?.description
													}
												</p>
											</div>
											{groupedTags[category].map(
												(tag) => (
													<div
														key={tag.id}
														className="w-full flex items-center justify-between border-b-[1px] py-2 px-4 border-gray-200 h-[60px] cursor-pointer hover:bg-gray-50"
													>
														<div className="text-ellipsis overflow-hidden whitespace-nowrap w-[25%]">
															<h1 className="text-[#000] font-normal text-[14px]">
																{tag.tagName}
															</h1>
															<span className="text-gray-400 font-normal text-[14px]">
																{tag.tagDescription ||
																	'-'}
															</span>
														</div>
														<div className="text-ellipsis overflow-hidden whitespace-nowrap w-[25%] flex items-center gap-2">
															<span className="bg-gray-200 py-[4px] px-[5px] rounded-[7px] cursor-pointer hover:bg-gray-300">
																<Eye
																	size={14}
																	className="text-gray-700"
																/>{' '}
															</span>
															<span className="text-gray-400 font-normal text-[14px]">
																{formatNumber(
																	tag
																		?.formResponsesIds
																		?.length ||
																		0,
																)}{' '}
																testimonials
																tagged
															</span>
														</div>
														<div className="w-[25%]">
															<span className="px-3 py-1 text-[13px] font-normal text-gray-600 bg-gray-100 rounded-[12px]">
																{tag.category}
															</span>
														</div>
														<div className="w-[12.5%]">
															<span className="text-gray-500 text-[14px] font-normal">
																{tag.createdAt
																	? timeAgo(
																			tag.createdAt,
																		)
																	: '-'}
															</span>
														</div>
														<div className="text-ellipsis overflow-hidden whitespace-nowrap flex items-center gap-3 w-[12.5%] justify-end">
															<ConfirmDeleteTag
																tag={tag}
																handleDeleteTag={
																	handleDeleteTag
																}
															/>
															<EditTag
																tag={tag}
																handleEditTag={
																	handleEditTag
																}
															/>
														</div>
													</div>
												),
											)}
										</div>
									),
								)}
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center mt-[100px]">
							<div className="flex flex-col items-center">
								<h1 className="font-semibold">No tags yet.</h1>
								<p className="text-gray-600 text-[14px]">
									Create tags by clicking the top right button
									&quot;Create tag&quot;.
								</p>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Page
