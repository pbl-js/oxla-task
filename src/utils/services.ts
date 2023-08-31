import { ApodPhotoData } from '@/app/page';
import { toast } from 'react-toastify';

export const savePhoto = async (photoData: ApodPhotoData) => {
  const res = await fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(photoData),
  });

  if (res.status === 200) return toast('Photo saved', { type: 'success' });

  const toastMessage = await res.text();
  toast(toastMessage, { type: 'error' });
};
