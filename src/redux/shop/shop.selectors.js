import { createSelector } from "reselect";
import { selectCartItems } from "../cart/cart.selectors";

const selectShop = (state) => state.shop;

export const selectInventory = createSelector(
  [selectShop],
  (shop) => shop.inventory
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectInventory], (inventory) => inventory[categoryUrlParam]);

export const selectInventoryForPreview = createSelector(
  [selectInventory],
  (inventory) => Object.keys(inventory).map(key => inventory[key])
);

export const selectCategoryForPreview = (categoryUrlParam) =>
  createSelector([selectInventory], (inventory) => Object.keys(inventory[categoryUrlParam].items).map(key => inventory[categoryUrlParam].items[key]));


export const selectItem = (categoryUrlParam, itemUrlParam) => createSelector(
  [selectInventory],
  (inventory) => inventory[categoryUrlParam].items[itemUrlParam]
)
