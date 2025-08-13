import { usePopularMovies } from '../../hooks/queries/useMovies';
import { IconButton } from '../ui/IconButton';
import { Skeleton } from '../ui/Skeleton';
import { FeaturedMovie } from './FeaturedMovie';

export const Header = () => {
  const { data, isLoading } = usePopularMovies();

  const featuredMovie = data?.pages[0]?.data.results[0];

  const handleLogoClick = () => {
    window.location.reload();
  };

  // 로딩 중일 때 스켈레톤 표시
  if (isLoading) {
    return (
      <header className="skeleton-animation">
        <Skeleton width={1980} height={500} />
      </header>
    );
  }

  return (
    <header>
      <div
        className={`background-container`}
        style={
          featuredMovie && {
            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${featuredMovie.poster_path})`,
          }
        }
      >
        <div className="overlay" />

        <div className="top-rated-container">
          {/* 헤더 섹션 (로고 + 검색바) */}
          <IconButton
            src="/images/logo.png"
            width="117"
            height="20"
            onClick={handleLogoClick}
            className="logo"
            alt="MovieLogo"
          />

          {/* 추천 영화 섹션 (검색 모드가 아닐 때만 표시) */}
          {featuredMovie && <FeaturedMovie movie={featuredMovie} />}
        </div>
      </div>
    </header>
  );
};
