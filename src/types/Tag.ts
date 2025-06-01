export type Tag = {
	id?: string
	tagName: string
	tagDescription: string
	createdAt?: string
	updatedAt?: string
	category: string
	userId?: string
	formResponsesIds?: string[]
}

export type CreateTagType = {
	tagName: string
	category: string
	tagDescription: string
	formResponsesIds?: any[]
	workspaceId?: string
}
