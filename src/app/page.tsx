import { getRandomPhoto } from '@/utils/services';
import { RandomImageWidget } from './_components/RandomImageWidget';

export default async function Home() {
  const randomPhoto = await getRandomPhoto();

  return (
    <div className="flex flex-col items-center gap-6">
      <RandomImageWidget randomPhoto={randomPhoto} />
    </div>
  );
}
