/* eslint-disable no-undef */
import FavoritesDb from '../src/scripts/data/favorites-db';
import * as FactoryTest from './helpers/factoriesTest';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurants"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurants"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoritesDb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoritesDb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({ id: 1 });
    await FavoritesDb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritesDb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoritesDb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FactoryTest.createLikeButtonPresenterRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoritesDb.getAllRestaurants()).toEqual([]);
  });
});
