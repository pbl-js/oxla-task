import { mockData } from '@/mockData';
import { getRandomPhoto } from '@/utils/services';
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

export default async function Home() {
  const [randomPhoto] = await getRandomPhoto();

  return (
    <div className="flex flex-col items-center gap-6">
      <RandomImageWidget randomPhoto={randomPhoto} />
    </div>
  );
}
