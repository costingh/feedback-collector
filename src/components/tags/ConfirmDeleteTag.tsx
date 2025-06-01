import { Loader2, Trash2 } from 'lucide-react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Tag } from '@/types/Tag'

export function ConfirmDeleteTag({
	tag,
	handleDeleteTag,
}: {
	tag: Tag
	handleDeleteTag: (tagId: string) => void
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="bg-red-200 py-[4px] px-[5px] rounded-[7px] cursor-pointer hover:bg-red-300">
					<Trash2 size={14} className="text-red-600" />
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<h1> Delete Tag</h1>
					</DialogTitle>
					<DialogDescription>
						You are about to delete tag {tag?.tagName}
					</DialogDescription>
				</DialogHeader>

				<div>
					<p className="text-gray-800 text-[14px]">
						Are you sure you want to delete tag {tag?.tagName}? This
						action is irremediable.
					</p>
				</div>

				<DialogFooter className="sm:justify-start">
					<div
						onClick={() => handleDeleteTag(tag?.id || '')}
						className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
					>
						Delete
					</div>

					<DialogClose asChild>
						<div id="close-dialog" style={{ display: 'none' }}>
							Save changes
						</div>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
