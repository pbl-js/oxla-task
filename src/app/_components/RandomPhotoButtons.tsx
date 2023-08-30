'use client';

import React from 'react';
import { ApodPhotoData } from '../page';

type RandomPhotoButtonsProps = {
  randomPhoto: ApodPhotoData;
  isLoading: boolean;
  handleNextPhoto: () => void;
};

export const RandomPhotoButtons = ({ handleNextPhoto }: RandomPhotoButtonsProps) => {
  return (
    <>
      <button className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">Zapisz</button>
      <button
        onClick={handleNextPhoto}
        className="bg-actionSecondary py-2 px-6 rounded-md font-semibold"
      >
        Następne
      </button>
    </>
  );
};
