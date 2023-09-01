'use client';

import { NoResults } from '@/components/NoResults';
import { PhotoPost } from '@/components/PhotoPost';
import { RandomImageLoading } from '@/components/RandomImageLoading';
import { useAppPhotoData } from '@/hooks/useAppPhotoData';
import React from 'react';

export const FavoritesWidget = () => {
  const { data, loading } = useAppPhotoData();

  if (loading) return <RandomImageLoading />;

  if (data?.length === 0) return <NoResults />;

  return (
    <div className="flex flex-col gap-5">
      {data?.map((favorite) => (
        <PhotoPost key={favorite.url} photo={favorite} />
      ))}
    </div>
  );
};
