import CONFIG_RES from '../../globals/config-restaurant';

const createRestaurantItem = (restaurant) => `
  <article class="restoran-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restoran-item_thumbnail lazyload" data-src="${CONFIG_RES.URL_BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      <div class="restoran-item_content">
        <p class="restoran-item_city">${restaurant.city} | <span class="restoran-item_rating" aria-label="rating restoran ${restaurant.rating}"><i class="fa fa-star font-yellow"></i>${restaurant.rating}</span>
        </p>
        <h3 class="restoran-item_name">${restaurant.name || '-'}</h3>
      </div>
    </a>
  </article>
`;

export default createRestaurantItem;
