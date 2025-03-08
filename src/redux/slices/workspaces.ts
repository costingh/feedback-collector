import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Workspace = {
	type: 'PERSONAL' | 'PUBLIC'
	name: string
	id: string
}

type InitialStateProps = {
	workspaces: Workspace[]
	activeWorkspaceId: string | null
}

const initialState: InitialStateProps = {
	workspaces: [],
	activeWorkspaceId: null,
}

export const Workspaces = createSlice({
	name: 'workspaces',
	initialState,
	reducers: {
		SET_WORKSPACES: (state, action: PayloadAction<Workspace[]>) => {
			state.workspaces = action.payload
		},
		SET_ACTIVE_WORKSPACE: (state, action: PayloadAction<string>) => {
			state.activeWorkspaceId = action.payload
		},
	},
})

export const { SET_WORKSPACES, SET_ACTIVE_WORKSPACE } = Workspaces.actions
export default Workspaces.reducer
