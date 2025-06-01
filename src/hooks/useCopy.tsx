import { useState } from 'react'
import { toast } from 'sonner'

const useCopy = () => {
	const [copied, setCopied] = useState(false)

	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			toast.success('Copied to clipboard!')
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy: ', err)
			toast.error('Failed to copy URL.')
		}
	}

	return { copied, handleCopy }
}

export default useCopy
