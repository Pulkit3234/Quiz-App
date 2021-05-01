import { createSlice } from '@reduxjs/toolkit';

const ApiSlice = createSlice({
	name: 'questions',
	initialState: { index: 0, data: [], score: 0, startQuiz: false },
	reducers: {
		start(state, action) {
			state.data = action.payload;
			state.startQuiz = true;
		},
		restart(state, action) {
			state.data = [];
			state.startQuiz = false;
		},
	},
});

export const apiActions = ApiSlice.actions;
export default ApiSlice;
