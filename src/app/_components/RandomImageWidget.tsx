'use client';

import React, { useState, useTransition } from 'react';
import { ApodPhotoData } from '../page';
import Image from 'next/image';
import { RandomPhotoButtons } from './RandomPhotoButtons';
import { useRouter } from 'next/navigation';
import { RandomImageLoading } from './RandomImageLoading';
import { PhotoPost } from '@/components/PhotoPost';

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
      <PhotoPost photo={randomPhoto} />
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
