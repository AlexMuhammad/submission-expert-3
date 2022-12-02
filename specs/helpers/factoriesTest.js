/* eslint-disable import/prefer-default-export */
import FavoritesDb from '../../src/scripts/data/favorites-db';
import likePresenterButton from '../../src/scripts/utils/like-presenter-button';

const createLikeButtonPresenterRestaurant = async (restaurant) => {
  await likePresenterButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoritesDb,
    restaurant,
  });
};

export {
  createLikeButtonPresenterRestaurant,
};
