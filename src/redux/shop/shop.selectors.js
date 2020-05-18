import { createSelector } from "reselect";
import { selectCartItems } from "../cart/cart.selectors";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam]);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map(key => collections[key])
);

export const selectCollectionItemsForPreview = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => Object.keys(collections[collectionUrlParam].items).map(key => collections[collectionUrlParam].items[key]));


export const selectItem = (collectionUrlParam, itemUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections[collectionUrlParam].items[itemUrlParam]
)
