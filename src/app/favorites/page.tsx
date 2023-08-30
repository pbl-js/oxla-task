import { mockData } from '@/mockData';
import { delayer } from '@/utils/delayer';
import { FavoritesWidget } from './_components/FavoritesWidget';

async function getFavorites() {
  const favorites = mockData.favorites;
  await delayer();
  return favorites;
}

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  return <FavoritesWidget favorites={favorites} />;
}
