/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import createRestaurantItem from '../../templates/items-template';

class ShowViewFavoriteRestaurant {
  getTemplate() {
    return `
    <main id="main" tabindex="0">
      <section class="content">
        <h2 class="list-restaurant__label">
          Favorites Restaurants
          <hr>
        </h2>
        <div id="restaurants" class="list-restoran">
        </div>
      </section>
    </main>
    `;
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItem(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default ShowViewFavoriteRestaurant;
