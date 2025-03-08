import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

// Select all workspaces
export const selectWorkspaces = (state: RootState) => state.WorkSpaceReducer.workspaces

// Select active workspace ID
export const selectActiveWorkspaceId = (state: RootState) => state.WorkSpaceReducer.activeWorkspaceId

// Select the current active workspace
export const selectCurrentWorkspace = createSelector(
    [selectWorkspaces, selectActiveWorkspaceId],
    (workspaces, activeWorkspaceId) => workspaces.find(ws => ws.id === activeWorkspaceId) || null
)
