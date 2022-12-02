import CONFIG_RES from '../../globals/config-restaurant';

const createRestaurantDetail = (restaurant) => `
  <div class="restaurant-detail_container">
    <div class="restaurant-detail_info">
      <h2 class="restaurant-detail_name">${restaurant.name}</h2>
      <p class="restaurant-detail_about">
        <span class="restaurant-detail_rating"><i class="fa fa-star font-yellow"></i>${restaurant.rating}</span> 
        ${restaurant.categories.map((category) => `
          <span class="restaurant-detail_category">${category.name}</span>
        `).join('')}
      </p>
      <p class="restoran-detail_location font-secondary">${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurant-detail_thumbnail" src="${CONFIG_RES.URL_BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" />
      <p class="restoran-detail_description">${restaurant.description}</p>
    </div>
    
    <h3>Menu List</h3>
    <div class="restaurant-detail_menu-list">
      <div class="foods">
        <h4>Foods</h4>
        <hr/>
        <ul class="restaurant-detail_foods">
          ${restaurant.menus.foods.map((food) => `
            <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h4>Drinks</h4>
        <hr/>
        <ul class="restaurant-detail_drinks">
          ${restaurant.menus.drinks.map((drink) => `
            <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>

    <h3>Review Customer</h3>
    <div class="restaurant-detail_review">
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <i class="fa fa-user-circle customer-avatar font-secondary"></i>
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

export default createRestaurantDetail;
