import { useState } from 'react'

export function useExpandableText() {
	const [expandedSet, setExpandedSet] = useState<Set<string>>(new Set())

	const toggle = (id: string) => {
		setExpandedSet((prev) => {
			const newSet = new Set(prev)
			newSet.has(id) ? newSet.delete(id) : newSet.add(id)
			return newSet
		})
	}

	const isExpanded = (id: string) => expandedSet.has(id)

	return { isExpanded, toggle }
}
