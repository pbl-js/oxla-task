'use client';

import { ApodPhotoData } from '@/app/page';
import React from 'react';

export type FavoriteProps = {
  favorites: ApodPhotoData[];
};

export const FavoritesWidget = ({ favorites }: FavoriteProps) => {
  return (
    <div className="flex w-full">
      {favorites.map((el) => (
        <div key={el.url}>{el.url}</div>
      ))}
    </div>
  );
};
