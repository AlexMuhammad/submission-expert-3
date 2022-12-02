import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoritesRestaurant from '../views/pages/favorite-restaurant';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
  '/': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorites': FavoritesRestaurant,
};

export default routes;
