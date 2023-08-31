import { NoResults } from '@/components/NoResults';
import { getFavorites } from '@/utils/services';
import { FavoritesWidget } from './_components/FavoritesWidget';

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  if (favorites.length === 0) return <NoResults />;

  return <FavoritesWidget favorites={favorites} />;
}
