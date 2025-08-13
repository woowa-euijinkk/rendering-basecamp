import { QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from 'overlay-kit';
import { useEffect } from 'react';
import { queryClient } from './lib/react-query';
import { Header } from './components/features/Header';
import { MovieList } from './components/features/MovieList';
import { Footer } from './components/features/Footer';
import { useCurrentPath } from './hooks/useCurrentPath';
import { useMovieDetailModal } from './hooks/useMovieDetailModal';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <div id="wrap">
          <Header />
          <MovieList />
          <Footer />
        </div>
        <DetailPageOpenModal />
      </OverlayProvider>
    </QueryClientProvider>
  );
}

function DetailPageOpenModal() {
  const pathname = useCurrentPath();
  const { openMovieDetailModal } = useMovieDetailModal();

  useEffect(() => {
    const detailMatch = pathname.match(/^\/detail\/(\d+)$/);
    if (detailMatch) {
      const movieId = detailMatch[1];
      openMovieDetailModal(Number(movieId));
    }
  }, [pathname, openMovieDetailModal]);

  return null;
}

export default App;
