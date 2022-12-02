/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import { itActsAsRestaurantModel } from './contracts/favoriteContract';

let dataFavoriteRestaurant = [];

const ArrayFavoriteRestaurant = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return dataFavoriteRestaurant.find((data) => data.id == id);
  },
  getAllRestaurants() {
    return dataFavoriteRestaurant;
  },
  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    dataFavoriteRestaurant.push(restaurant);
  },
  deleteRestaurant(id) {
    dataFavoriteRestaurant = dataFavoriteRestaurant.filter((data) => data.id != id);
  },
  // searchRestaurants(query) {
  //   return this.getAllRestaurants()
  //     .filter((restaurant) => {
  //       const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
  //       const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

  //       const loweredCaseQuery = query.toLowerCase();
  //       const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

  //       return jammedRestaurantName.indexOf(jammedQuery) !== -1;
  //     });
  // },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => dataFavoriteRestaurant = []);

  itActsAsRestaurantModel(ArrayFavoriteRestaurant);
});
