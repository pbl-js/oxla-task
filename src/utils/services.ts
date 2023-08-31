import { mockData } from '@/mockData';
import { toast } from 'react-toastify';
import { delayer } from './delayer';
import { ApodPhotoData } from './types';

export const getFavorites = async () => {
  const favorites = mockData.favorites;
  await delayer();
  return favorites;
};

export const savePhoto = async (photoData: ApodPhotoData) => {
  const res = await fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(photoData),
  });

  if (res.status === 200) return toast('Photo saved', { type: 'success' });

  const toastMessage = await res.text();
  toast(toastMessage, { type: 'error' });
};

export const getRandomPhoto = async (): Promise<ApodPhotoData[]> => {
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
};
