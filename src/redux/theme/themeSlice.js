import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getInitialTheme = async () => {
  const theme = await AsyncStorage.getItem('theme');
  return theme ? JSON.parse(theme) : null;
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export const selectTheme = state => state.theme.theme;

export default themeSlice.reducer;
