import SourceRestaurant from '../../data/therestaurant-source';
import Loader from '../../utils/loader';
import createRestaurantItem from '../templates/items-template';

const RestaurantList = {
  async render() {
    return `
      <div class="hero">
      <div class="hero__inner">
          <h2 class="hero__title">YokMamam selalu dihati selalu dinanti!</h2>
          <p class="hero__tagline">
            YokMamam! merupakan sebuah restoran prasmanan yang mengunggulkan kuantitas dan juga kualitas
          </p>
        </div>
      </div>

      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restoran__label">
            Jelajahi Restoran
            <hr>
          </h2>
          <div class="list-restoran"></div>
        </section>
        <section class="other">
          <article class="jobs-item">
            <picture>
              <source media="(max-width: 600px)" srcset="../images/hero-image_4-small.jpg">
              <img src='../images/hero-image_4-large.jpg' alt="hero poster">
            </picture>
            <div class="jobs-item__content">
              <h3 class="jobs-item__name">Join our team</h3>
              <p class="jobs-item__city">We're always hiring and excited to add new talent to our team.</p>
              <p class="jobs-item__more">-LEARN MORE</p>
            </div>
          </article>
          <article class="info-item">
            <div class="info-item__thumbnail"></div>
            <div class="jobs-item__content">
              <h3 class="jobs-item__name">Sustainability</h3>
              <p class="jobs-item__city">Comitted to the triple bottom line-people, planet and profit-we do everything we can to make our restaurant environment as healthy as possible.</p>
              <p class="info-item__more">-LEARN MORE</p>
            </div>
          </article>
        </section>
      </main>
    `;
  },

  async afterRender() {
    Loader.hideLoading();
    const restaurants = await SourceRestaurant.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default RestaurantList;
