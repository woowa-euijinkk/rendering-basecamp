import { useInfiniteQuery } from '@tanstack/react-query';
import { moviesApi } from '../../api/movies';
import { QUERY_KEYS } from '../../api/constants';

/**
 * 인기 영화 목록을 무한 스크롤로 조회하는 훅
 */
export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.MOVIES.POPULAR,
    queryFn: ({ pageParam = 1 }) => moviesApi.getPopular(pageParam),
    getNextPageParam: lastPage =>
      lastPage.data.page < lastPage.data.total_pages
        ? lastPage.data.page + 1
        : undefined,
    initialPageParam: 1,
  });
};
