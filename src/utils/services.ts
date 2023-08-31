import { ApodPhotoData } from '@/app/page';

export const savePhoto = (photoData: ApodPhotoData) => {
  fetch('http://localhost:3000/api', { method: 'POST', body: JSON.stringify(photoData) });
};
