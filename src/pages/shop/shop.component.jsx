import React from "react";
import "./shop.styles.scss";
import InventoryOverview from "../../components/inventory-overview/inventory-overview.component";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "../category/category.component";
import ItemPage from '../itempage/itempage.component';
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
        <Switch>
            <Route exact path={`${match.path}`} component={InventoryOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
            <Route path={`${match.path}/:categoryId/:itemId`} component={ItemPage} />
        </Switch>
    </div>
  );
};

export default ShopPage;
