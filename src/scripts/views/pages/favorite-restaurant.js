/* eslint-disable no-new */
import FavoritesDb from '../../data/favorites-db';
import ShowPresenterFavoriteRestaurant from './restaurant-liked/show-presenter-favorite-liked';
import ShowViewFavoriteRestaurant from './restaurant-liked/show-view-favorite-restaurant';

const view = new ShowViewFavoriteRestaurant();

const Favorites = {

  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new ShowPresenterFavoriteRestaurant({ view, favoriteRestaurant: FavoritesDb });
  },
};

export default Favorites;
