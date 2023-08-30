import { mockData } from '@/mockData';
import Image from 'next/image';
import { Test } from './_components/test';

type RandomPhoto = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

async function getRandomPhoto(): Promise<RandomPhoto[]> {
  const res = await fetch(
    'https://api.nasa.gov/planetary/apod?' +
      new URLSearchParams({
        // TODO: remove assertion
        api_key: process.env.API_KEY as string,
        count: '1',
      }),
    { next: { tags: ['randomPhoto'] } }
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
      <Test randomImage={randomPhoto} />
      <article className="flex flex-col  bg-bgSecondary rounded-md">
        <header className="py-2 px-4">
          <h2 className="font-semibold text-lg">{randomPhoto.title}</h2>
          <p>{randomPhoto.explanation}</p>
        </header>
        <Image className="w-full" alt="test" src={randomPhoto.url} width={1000} height={300} />
        <div className="py-2 px-4 flex justify-between">
          <div>{`Author: ${randomPhoto.copyright || 'Unknown'}`}</div>
          <div>{randomPhoto.date}</div>
        </div>
      </article>
      <div className="flex flex-row gap-2">
        <button className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">Zapisz</button>
        <button className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">Następne</button>
      </div>
    </div>
  );
}
