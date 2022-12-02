/* eslint-disable no-underscore-dangle */
import FavoritesDb from '../data/favorites-db';
import createLikeButton from '../views/templates/like-template';
import createLikedButton from '../views/templates/liked-template';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    restaurant,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {
      id,
    } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked(id);
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoritesDb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritesDb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked(id) {
    this._likeButtonContainer.innerHTML = createLikedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritesDb.deleteRestaurant(id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
