'use client'

import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

export const useSubscription = () => {
	const [isProcessing, setIsProcessing] = useState(false)
	const onSubscribe = async (planType: string) => {
		setIsProcessing(true)
		try {
			const response = await axios.get(`/api/payment/${planType}`)
			if (response.data.status === 200) {
				return (window.location.href = `${response.data.session_url}`)
			} else {
				toast('Invalid plan type!')
			}
			setIsProcessing(false)
		} catch (error) {
			toast('Invalid plan type!')
			setIsProcessing(false)
			console.log(error, '🔴')
		}
	}
	return { onSubscribe, isProcessing }
}
