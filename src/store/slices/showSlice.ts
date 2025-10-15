import { ShowsState, Filters } from '@/types';
import data from '../../app/_data/data.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState : ShowsState = {
    allShows: data.shows,
    filteredShows: data.shows,
    filters : { genres: [],  sort: '' }
}

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;

      let result = [...state.allShows];

      if (state.filters.genres.length > 0) {
        result = result.filter(show => state.filters.genres.includes(show.genre!));
      }

      switch (state.filters.sort) {
        case 'date':
          result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          break;
        case 'price_asc':
          result.sort((a, b) => parseFloat(a.price.replace('$','')) - parseFloat(b.price.replace('$','')));
          break;
        case 'price_desc':
          result.sort((a, b) => parseFloat(b.price.replace('$','')) - parseFloat(a.price.replace('$','')));
          break;
      }

      state.filteredShows = result;
    },
    clearFilters: (state) => {
      state.filters = { genres: [], sort: '' };
      state.filteredShows = [...state.allShows];
    },
  },
});

export const { setFilters, clearFilters } = showsSlice.actions;
export default showsSlice.reducer;