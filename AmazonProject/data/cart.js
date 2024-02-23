export const cart = [];

export function addToCart(productId, itemQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += itemQuantity;
  } else {
    cart.push({
      productId,
      quantity : itemQuantity
    });
  }
}