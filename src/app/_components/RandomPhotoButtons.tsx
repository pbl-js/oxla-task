'use client';

import React from 'react';
import { ApodPhotoData } from '../page';

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
        Zapisz
      </button>
      <button
        onClick={handleNextPhoto}
        className="bg-actionSecondary py-2 px-6 rounded-md font-semibold"
      >
        Następne
      </button>
    </>
  );
};
