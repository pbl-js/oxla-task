import { mockData } from '@/mockData';
import { toast } from 'react-toastify';
import { FIRST_APOD_DATE } from './consts';
import { formatDate, getTodayDate, randomDateInRange } from './date';

import { ApodPhotoData } from './types';

export const getFavorites = async () => {
  const favorites = mockData.favorites;
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

export const getRandomPhoto = async (): Promise<ApodPhotoData> => {
  let finalResult;

  while (!finalResult) {
    const todayDate = getTodayDate();
    const startDate = new Date(FIRST_APOD_DATE);
    const endDate = new Date(todayDate);

    let date;

    while (!date) {
      const randomDate = formatDate(randomDateInRange(startDate, endDate));
      const isUnique = !mockData.appUniqueHistory.some((el) => el.date === randomDate);
      if (isUnique) {
        date = randomDate;
      }
    }

    const res = await fetch(
      'https://api.nasa.gov/planetary/apod?' +
        new URLSearchParams({
          // TODO: remove assertion
          api_key: process.env.API_KEY as string,
          date,
        }),
      { cache: 'no-cache' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = (await res.json()) as ApodPhotoData;

    if (data.media_type !== 'video') {
      mockData.appUniqueHistory.push(data);
      finalResult = data;
    }
  }

  return finalResult;
};
