import { createSlice, configureStore } from "@reduxjs/toolkit";
import { DEFAULT_THEME } from "../utils/constants";

interface State {
  theme: typeof DEFAULT_THEME;
}

interface Action {
  payload: State;
}

const slice = createSlice({
  name: "theme",
  initialState: {
    theme: DEFAULT_THEME,
  } as State,
  reducers: {
    changeTheme: (state: State, action: Action) => {
      // eslint-disable-next-line no-param-reassign
      state.theme = action.payload.theme;
    },
  },
});

export const { changeTheme } = slice.actions;

const storeTheme = configureStore({
  reducer: slice.reducer,
});

export default storeTheme;
