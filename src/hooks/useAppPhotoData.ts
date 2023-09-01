import { ApodPhotoData } from '@/utils/types';
import React, { useState } from 'react';

export const useAppPhotoData = () => {
  // TODO: Discriminated Union based on loading state
  const [data, setData] = useState<{ data: null | ApodPhotoData[]; loading: boolean }>({
    data: null,
    loading: true,
  });

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api', {
        method: 'GET',
      });

      const dataResponse = await res.json();
      setData(() => ({ data: dataResponse, loading: false }));
    })();
  }, []);

  return { data: data.data, loading: data.loading };
};
