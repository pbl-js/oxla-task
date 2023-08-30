'use client';

import React, { useState, useTransition } from 'react';
import { ApodPhotoData } from '../page';
import Image from 'next/image';
import { RandomPhotoButtons } from './RandomPhotoButtons';
import { useRouter } from 'next/navigation';
import { RandomImageLoading } from './RandomImageLoading';

export type RandomImageWidgetProps = { randomPhoto: ApodPhotoData };

export const RandomImageWidget = ({ randomPhoto }: RandomImageWidgetProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const refreshAction = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  if (isPending) return <RandomImageLoading />;

  return (
    <>
      <article className="flex flex-col  bg-bgSecondary rounded-md">
        <header className="py-2 px-4">
          <h2 className="font-semibold text-lg">{randomPhoto.title}</h2>
          <p>{randomPhoto.explanation}</p>
        </header>
        <Image className="w-full" alt="test" src={randomPhoto.url} width={540} height={500} />
        <div className="py-2 px-4 flex justify-between">
          <div>{`Author: ${randomPhoto.copyright || 'Unknown'}`}</div>
          <div>{randomPhoto.date}</div>
        </div>
      </article>
      <div className="flex flex-row gap-2">
        <RandomPhotoButtons
          handleNextPhoto={refreshAction}
          isLoading={isPending}
          randomPhoto={randomPhoto}
        />
      </div>
    </>
  );
};
