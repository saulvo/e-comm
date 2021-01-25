import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
	name: "language",
	initialState: {
		current: "en",
	},

	reducers: {
		updateLang(state, action) {
			state.current = action.payload;
    },
	},
});

export const { updateLang } = languageSlice.actions;
export default languageSlice.reducer;
