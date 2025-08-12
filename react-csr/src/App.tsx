import { QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from 'overlay-kit';
import { queryClient } from './lib/react-query';
import { Header } from './components/features/Header';
import { MovieList } from './components/features/MovieList';
import { Footer } from './components/features/Footer';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <div id="wrap">
          <Header />
          <MovieList />
          <Footer />
        </div>
      </OverlayProvider>
    </QueryClientProvider>
  );
}

export default App;
