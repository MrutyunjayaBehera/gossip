import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		_initialized: false,
	},
	reducers: {
		setProfileState: (state, action) => {
			const newState = { ...state, ...action.payload };
			return newState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setProfileState } = profileSlice.actions;

export default profileSlice.reducer;
