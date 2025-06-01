import React from 'react'
import ReactQueryProvider from '@/react-query'

type Props = {
	children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
	return (
		<ReactQueryProvider>
			{children}
		</ReactQueryProvider>
	)
}

export default Layout
