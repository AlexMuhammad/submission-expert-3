/* eslint-disable no-undef */
import FavoritesDb from '../src/scripts/data/favorites-db';
import * as FactoryTest from './helpers/factoriesTest';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoritesDb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoritesDb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurants"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurants"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));

    expect(await FavoritesDb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });
    await FavoritesDb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));

    expect(await FavoritesDb.getAllRestaurants()).toEqual([]);
  });
});
