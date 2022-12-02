/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  pause();
  I.amOnPage('/#/favorites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoran-item_name');

  const firstRestaurant = locate('.restoran-item_name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.restoran-item_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoran-item_name');

  const firstRestaurant = locate('.restoran-item_name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.restoran-item_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restoran-item_name');

  const firstRestaurantLiked = locate('.restoran-item_name').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});
