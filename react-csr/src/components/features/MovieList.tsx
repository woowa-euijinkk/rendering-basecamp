import { usePopularMovies } from '../../hooks/queries/useMovies';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useMovieDetailModal } from '../../hooks/useMovieDetailModal';
import { MovieItem } from './MovieItem';
import type { MovieItem as MovieItemType } from '../../types/Movie.types';
import { Loading } from '../ui/Loading';

export const MovieList = () => {
  const { openMovieDetailModal } = useMovieDetailModal();

  // 검색어가 있으면 검색 쿼리, 없으면 인기 영화 쿼리 사용
  const popularQuery = usePopularMovies();
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = popularQuery;

  // 모든 페이지의 영화들을 하나의 배열로 합치기
  const movies = data?.pages.flatMap(page => page.data.results) ?? [];

  const { lastElementRef } = useInfiniteScroll(
    () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    hasNextPage,
    isFetchingNextPage
  );

  const handleMovieClick = async (movie: MovieItemType) => {
    await openMovieDetailModal(movie.id);
  };

  const title = '지금 인기 있는 영화';

  // 에러 상태
  if (error) {
    return null;
  }

  // 검색 결과가 없는 경우
  if (movies.length === 0 && !isLoading) {
    return null;
  }

  return (
    <main>
      <section className="container">
        <h2 className="text-2xl font-bold mb-64">{title}</h2>
        <ul className="thumbnail-list">
          {movies.map((movie, index) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onClick={handleMovieClick}
              ref={index === movies.length - 1 ? lastElementRef : null}
            />
          ))}
          {(isLoading || isFetchingNextPage) && <Loading />}
        </ul>
      </section>
    </main>
  );
};
