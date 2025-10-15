// src/store/types.ts

export interface Show {
  id: number;
  image: string;
  name: string;
  displayDate: string;
  date: string;
  time: string;
  price: string;
  venue: string;
  location: string;
  genre?: string;
}

export interface Filters {
  genres: string[];
  sort: string;
}

export interface ShowsState {
  allShows: Show[];
  filteredShows: Show[];
  filters: Filters;
}

export interface Movie {
  id: number;
  image: string;
  name: string;
  rating: number;
  language: string;
  category: string;
  genre: string[];
  release_date: string;
  overview: string;
}
