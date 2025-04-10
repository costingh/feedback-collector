'use server'

import { client } from "@/lib/prisma"
import { CreateTagType, Tag } from "@/types/Tag"
import { currentUser } from "@clerk/nextjs/server"

export const getUserTags = async (workspaceId: string | undefined) => {
    try {
        const user = await currentUser()

        if (!user || !workspaceId) return { status: 404 }

        const tags = await client.tag.findMany({
            where: {
                // userId: user.id,
                workspaceId
            },
        })

        if (tags) {
            return { status: 200, data: tags }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const createTag = async ({tagName, category, tagDescription, formResponsesIds, workspaceId}:CreateTagType) => {
    try {
        const user = await currentUser()

        if (!user || !workspaceId) return { status: 404, data: 'User or workspace was not found'}

        const tag = await client.tag.create({
            data: {
                tagName,
                category,
                tagDescription,
                userId: user.id,
                formResponsesIds,
                workspaceId
            },
        })

        if (tag) {
            return { status: 200, tag: tag, data: 'Tag created successfully' }
        } else return { status: 400, data: 'Tag could not been created' }
    } catch (error) {
        console.log('Error creating tag ', error)
        return { status: 400, data: 'Tag could not been created'}
    }
}

export const deleteTag = async (tagId : string) => {
    try {
        const user = await currentUser()

        if (!user || !tagId) return { status: 404, data: 'User or tag was not found'}

        const response = await client.tag.delete({
            where: {
                id: tagId,
                userId: user.id
            },
        })

        if (response?.id) {
            return { status: 200, data: 'Tag deleted successfully', tagId: response.id}
        } else return { status: 400, data: 'Tag could not been deleted. Maybe it was created by another user in the same workspace you work.' }
    } catch (error) {
        console.log('Error creating tag ', error)
        return { status: 400, data: 'Tag could not been deleted'}
    }
}

export const editTag = async (tag : Tag) => {
    try {
        const user = await currentUser()

        if (!user || !tag?.id) return { status: 404, data: 'User or tag was not found'}

        const updatedTag = await client.tag.update({
            where: { id: tag.id },
            data: {
                tagName: tag.tagName,
                category: tag.category,
                tagDescription: tag.tagDescription,
                formResponsesIds: tag.formResponsesIds
            },
        });

        if (updatedTag?.id) {
            return { status: 200, data: 'Tag updated successfully', tag: updatedTag}
        } else return { status: 400, data: 'Tag could not been updated' }
    } catch (error) {
        console.log('Error creating tag ', error)
        return { status: 400, data: 'Tag could not been updated'}
    }
}