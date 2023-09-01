'use client';

import React, { useTransition } from 'react';
import { RandomPhotoButtons } from './RandomPhotoButtons';
import { useRouter } from 'next/navigation';
import { RandomImageLoading } from '../../components/RandomImageLoading';
import { PhotoPost } from '@/components/PhotoPost';
import { savePhoto } from '@/utils/services';
import { ApodPhotoData } from '@/utils/types';

export type RandomImageWidgetProps = { randomPhoto: ApodPhotoData };

export const RandomImageWidget = ({ randomPhoto }: RandomImageWidgetProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const refreshAction = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  const savePhotoAction = async () => {
    await savePhoto(randomPhoto);
  };

  if (isPending) return <RandomImageLoading />;

  return (
    <>
      <PhotoPost photo={randomPhoto} />
      <div className="flex flex-row gap-2">
        <RandomPhotoButtons
          handleNextPhoto={refreshAction}
          handleSavePhoto={savePhotoAction}
          isLoading={isPending}
          randomPhoto={randomPhoto}
        />
      </div>
    </>
  );
};
