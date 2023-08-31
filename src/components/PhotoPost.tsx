import { ApodPhotoData } from '@/app/page';
import React from 'react';
import Image from 'next/image';

export type PhotoPostProps = {
  photo: ApodPhotoData;
};

export const PhotoPost = ({ photo }: PhotoPostProps) => {
  return (
    <>
      <article className="flex flex-col  bg-bgSecondary rounded-md">
        <header className="py-2 px-4">
          <h2 className="font-semibold text-lg">{photo.title}</h2>
          <p>{photo.explanation}</p>
        </header>
        <Image className="w-full" alt="test" src={photo.url} width={540} height={500} />
        <div className="py-2 px-4 flex justify-between">
          <div>{`Author: ${photo.copyright || 'Unknown'}`}</div>
          <div className="whitespace-nowrap">{photo.date}</div>
        </div>
      </article>
    </>
  );
};