import { createSlice } from '@reduxjs/toolkit';

const isServer = typeof window === 'undefined';

export const counterSlice = createSlice({
	name: 'general',
	initialState: {
		scope: 'partner',
		isServer,
		isDarkMode: false,
	},
	reducers: {
		setGeneralState: (state, data) => ({
			...(state || {}),
			...(data?.payload || {}),
		}),
	},
});

// Action creators are generated for each case reducer function
export const { setGeneralState } = counterSlice.actions;

export default counterSlice.reducer;
