/* eslint-disable no-underscore-dangle */
class ShowPresenterFavoriteRestaurant {
  constructor({ favoriteRestaurant, view }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;
    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurant = await this._favoriteRestaurant.getAllRestaurants();
    this._restaurantDisplay(restaurant);
  }

  _restaurantDisplay(restaurant) {
    this._view.showFavoriteRestaurants(restaurant);
  }
}

export default ShowPresenterFavoriteRestaurant;
