export const ENV = {
  VITE_API_URL: import.meta.env.VITE_API_URL || 'https://api.themoviedb.org/3',
  VITE_TMDB_HEADER: import.meta.env.VITE_TMDB_HEADER || '',
} as const;
