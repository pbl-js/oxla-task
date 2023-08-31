import { getFavorites } from '@/utils/services';
import { FavoritesWidget } from './_components/FavoritesWidget';

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  return <FavoritesWidget favorites={favorites} />;
}
