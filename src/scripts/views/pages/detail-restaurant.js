import FavoritesDb from '../../data/favorites-db';
import RestaurantSource from '../../data/therestaurant-source';
import ParserUrl from '../../routes/parser-url';
import LikeButtonInitiator from '../../utils/like-presenter-button';
import Loader from '../../utils/loader';
import createRestaurantDetail from '../templates/detail-template';

const Detail = {
  async render() {
    return `
      <main id="main" tabindex="0">
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      </main>
    `;
  },

  async afterRender() {
    Loader.hideLoading();
    const url = ParserUrl.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetail(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoritesDb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
