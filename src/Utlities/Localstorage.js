
// get Cart from local storage
const getStoredCartFromLocalStorage = () => {
      const getItemStringified = localStorage.getItem('cart');
      if (getItemStringified) {
            const getItem = JSON.parse(getItemStringified);
            return getItem;
      }
      return [];
}

// save cart to local storage 2
const saveCartToLocalStorage = (cart) => {
      const itemStringified = JSON.stringify(cart);
      localStorage.setItem('cart', itemStringified);
}

// save cart to local storage 2
const addToLocalStorage = (id) => {
      const cart = getStoredCartFromLocalStorage();
      cart.push(id);

      saveCartToLocalStorage(cart);
};

// remove cart from local storage
const removeCartFromLocalStorage = (id) => {
      const storedCart = getStoredCartFromLocalStorage();
      const remainingCart = storedCart.filter(cart => cart !== id)
      saveCartToLocalStorage(remainingCart)
}

export { addToLocalStorage, getStoredCartFromLocalStorage, removeCartFromLocalStorage }