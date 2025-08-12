import { useRef, useCallback } from 'react';

export const useInfiniteScroll = (
  onLoadMore: () => void,
  hasNextPage: boolean = true,
  isLoading: boolean = false
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, onLoadMore]
  );

  return { lastElementRef };
};
