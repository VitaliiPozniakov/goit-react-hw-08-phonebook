import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '' },

  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterContacts } = contactSlice.actions;
export default contactSlice.reducer;