'use client';

import { ApodPhotoData } from '@/utils/types';
import React from 'react';

type RandomPhotoButtonsProps = {
  randomPhoto: ApodPhotoData;
  isLoading: boolean;
  handleNextPhoto: () => void;
  handleSavePhoto: () => Promise<void>;
};

export const RandomPhotoButtons = ({
  handleNextPhoto,
  handleSavePhoto,
}: RandomPhotoButtonsProps) => {
  return (
    <>
      <button
        onClick={handleSavePhoto}
        className="bg-actionSecondary py-2 px-6 rounded-md font-semibold"
      >
        Save
      </button>
      <button
        onClick={handleNextPhoto}
        className="bg-actionSecondary py-2 px-6 rounded-md font-semibold"
      >
        Next photo
      </button>
    </>
  );
};
