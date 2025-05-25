export type WorkspaceProps = {
	data: {
		subscription: {
			plan: 'FREE' | 'PRO' | 'BUSINESS'
		} | null
		workspace: {
			id: string
			name: string
			type: 'PUBLIC' | 'PERSONAL'
		}[]
		members: {
			WorkSpace: {
				id: string
				name: string
				type: 'PUBLIC' | 'PERSONAL'
			}
		}[]
	}
}

export type NotificationProps = {
	status: number
	data: {
		_count: {
			notification: number
		}
	}
}

export type ColorTypes = "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";
