export const QUERY_KEYS = {
  MOVIES: {
    ALL: ['movies'] as const,
    POPULAR: ['movies', 'popular'] as const,
    SEARCH: (query: string) => ['movies', 'search', query] as const,
  },
  MOVIE: {
    ALL: ['movie'] as const,
    DETAIL: (id: number) => ['movie', 'detail', id] as const,
    RATING: (id: number) => ['movie', 'rating', id] as const,
  },
} as const;

export const CACHE_TIME = {
  SHORT: 1 * 60 * 1000, // 1분
  MEDIUM: 5 * 60 * 1000, // 5분
  LONG: 30 * 60 * 1000, // 30분
} as const;
