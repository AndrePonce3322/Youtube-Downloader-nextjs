'use client';

import { SearchVideoProps } from '@/types/search-props';
import { useEffect, useState } from 'react';

export default function useSearch({ search }: { search: string | null }) {
  const [videos, setVideos] = useState<SearchVideoProps>();
  const [pageToken, setPageToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/search?q=${search}`);
      const data = (await res.json()) as SearchVideoProps;
      setVideos(data);
      setPageToken(data.nextPageToken);
    })();
  }, [search]);

  return { videos, pageToken };
}
