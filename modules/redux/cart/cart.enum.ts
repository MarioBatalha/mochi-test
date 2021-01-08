export enum CartActionTypes {
  CART_OPEN = 'CART_OPEN',
  CART_CLOSE = 'CART_CLOSE',
  CART_ADD_ITEM_START = 'CART_ADD_ITEM_START',
  CART_ADD_ITEM_SUCCESS = 'CART_ADD_ITEM_SUCCESS',
  CART_REMOVE_ITEM_START = 'CART_REMOVE_ITEM_START',
  CART_REMOVE_ITEM_SUCCESS = 'CART_REMOVE_ITEM_SUCCESS',
  CART_CLEAR_ITEM_START = 'CART_CLEAR_ITEM_START',
  CART_CLEAR_ITEM_SUCCESS = 'CART_CLEAR_ITEM_SUCCESS',
  CART_CLEAR_START = 'CART_CLEAR_START',
  CART_CLEAR_SUCCESS = 'CART_CLEAR_SUCCESS',
  CART_CHECK_LOCAL_STORAGE_START = 'CART_CHECK_LOCAL_STORAGE_START',
  CART_CHECK_LOCAL_STORAGE_SUCCESS = 'CART_CHECK_LOCAL_STORAGE_SUCCESS',
}

export enum CartSelectorEnum {
  Cart = 'cart',
  Visible = 'visible',
  CartItems = 'cartItems',
  StoreName = 'storeName',
  StoreId = 'storeId',
}