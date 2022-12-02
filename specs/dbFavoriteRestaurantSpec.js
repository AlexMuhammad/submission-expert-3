/* eslint-disable no-undef */
import FavoritesDb from '../src/scripts/data/favorites-db';
import { itActsAsRestaurantModel } from './contracts/favoriteContract';

describe('Favorite restauran db contract test implementation', () => {
  afterEach(async () => {
    (await FavoritesDb.getAllRestaurants()).forEach(async (resturant) => {
      await FavoritesDb.deleteRestaurant(resturant.id);
    });
  });
  itActsAsRestaurantModel(FavoritesDb);
});
