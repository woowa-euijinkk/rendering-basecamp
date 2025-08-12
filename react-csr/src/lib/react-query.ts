import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분 - 데이터가 신선한 것으로 간주되는 시간
      gcTime: 10 * 60 * 1000, // 10분 - 캐시에서 제거되기까지의 시간
      retry: (failureCount, error: unknown) => {
        // 404 에러는 재시도하지 않음
        if (
          error &&
          typeof error === 'object' &&
          'status' in error &&
          error.status === 404
        ) {
          return false;
        }
        // 최대 3번까지 재시도
        return failureCount < 3;
      },
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
      refetchOnMount: true, // 마운트 시 refetch
      refetchOnReconnect: true, // 네트워크 재연결 시 refetch
    },
    mutations: {
      retry: 1, // 뮤테이션은 1번만 재시도
    },
  },
});
