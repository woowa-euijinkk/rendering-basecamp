import { overlay } from 'overlay-kit';
import { MovieDetailModalLoader } from '../components/features/MovieDetailModalLoader';

export const useMovieDetailModal = () => {
  const openMovieDetailModal = (movieId: number) => {
    return new Promise<void>(resolve => {
      overlay.open(({ unmount }) => (
        <MovieDetailModalLoader
          movieId={movieId}
          close={() => {
            resolve();
            unmount();
          }}
        />
      ));
    });
  };

  return { openMovieDetailModal };
};
