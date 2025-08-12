import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../../api/movies';
import { QUERY_KEYS, CACHE_TIME } from '../../api/constants';

/**
 * 영화 상세 정보를 조회하는 훅
 */
export const useMovieDetail = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.MOVIE.DETAIL(id),
    queryFn: () => moviesApi.getDetail(id),
    enabled: !!id, // id가 있을 때만 실행
    staleTime: CACHE_TIME.LONG, // 상세 정보는 오래 캐시
    gcTime: CACHE_TIME.LONG,
  });
};
