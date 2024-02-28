import { cart, removeFromCart, updateCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import { calculateCartQuantity } from './utils/cart-quantity.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const {productId} = cartItem;
  let matchingProduct;

  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${productId}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span data-product-id="${productId}" class="quantity-label js-quantity-label">${cartItem.quantity}</span>
            </span>
            <span data-product-id="${productId}" class="update-quantity-link link-primary js-update-link">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${productId}">
            <span data-product-id="${productId}" class="save-quantity-link link-primary js-save-link">
              Save
            </span>
            <span data-product-id="${productId}" class="delete-quantity-link link-primary js-delete-link">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${productId}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${productId}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${productId}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

renderCheckoutPage();

function renderCheckoutPage() {
  document.querySelector('.js-checkout-items-number')
    .innerHTML = `Items ${calculateCartQuantity(cart)}`;
  
  document.querySelectorAll(`.js-quantity-label`)
    .forEach((element) => {
      const productId = element.dataset.productId;
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          element.innerHTML = cartItem.quantity;
        }
      });
    });
}

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`)
        .remove();
      let html = '';
      if (calculateCartQuantity(cart) !== 0) {
        html = `Items ${calculateCartQuantity(cart)}`;
      }
      document.querySelector('.js-checkout-items-number')
        .innerHTML = html;
    });
  });

document.querySelectorAll('.js-update-link')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const productId = element.dataset.productId;

      document.querySelector(`.js-cart-item-container-${productId}`)
        .classList.add('is-editing-quantity');
    });
  });

document.querySelectorAll('.js-save-link')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const productId = element.dataset.productId;
      const newQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value);

      updateCart(productId, newQuantity);
      renderCheckoutPage();

      document.querySelector(`.js-cart-item-container-${productId}`)
        .classList.remove('is-editing-quantity');     
    });
  });