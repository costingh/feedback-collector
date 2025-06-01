import { Tag } from '@/types/Tag'
import { TagIcon } from 'lucide-react'

type DisplayTestimonialTagsProps = {
	tags: Tag[]
	id: string
}

const DisplayTestimonialTags: React.FC<DisplayTestimonialTagsProps> = ({
	tags,
	id,
}) => {
	const tagNames =
		tags
			.reduce((acc, tag) => {
				const formResponsesSet = new Set(tag?.formResponsesIds)
				if (formResponsesSet.has(id)) {
					acc.push(tag.tagName)
				}
				return acc
			}, [] as string[])
			.join(', ') || 'No tags yet'

	return (
		<div className="flex items-center gap-1">
			<TagIcon size={13} className="text-gray-400" />
			<span className="text-gray-400 font-semibold text-[12px]">
				{tagNames}
			</span>
		</div>
	)
}

export default DisplayTestimonialTags
