'use client';

import { ApodPhotoData } from '@/app/page';
import { PhotoPost } from '@/components/PhotoPost';
import React from 'react';

export type FavoriteProps = {
  favorites: ApodPhotoData[];
};

export const FavoritesWidget = ({ favorites }: FavoriteProps) => {
  return (
    <div className="flex w-full">
      {favorites.map((favorite) => (
        <PhotoPost key={favorite.url} photo={favorite} />
      ))}
    </div>
  );
};
