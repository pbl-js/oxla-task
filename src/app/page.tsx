import { mockData } from '@/mockData';
import { RandomImageWidget } from './_components/RandomImageWidget';

import { RandomPhotoButtons } from './_components/RandomPhotoButtons';

export type ApodPhotoData = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

async function getRandomPhoto(): Promise<ApodPhotoData[]> {
  const res = await fetch(
    'https://api.nasa.gov/planetary/apod?' +
      new URLSearchParams({
        // TODO: remove assertion
        api_key: process.env.API_KEY as string,
        count: '1',
      }),
    { cache: 'no-cache' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const [randomPhoto] = await getRandomPhoto();

  return (
    <div className="flex flex-col items-center gap-6">
      <RandomImageWidget randomPhoto={randomPhoto} />
    </div>
  );
}
