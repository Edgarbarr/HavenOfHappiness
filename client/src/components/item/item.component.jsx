import React from "react";

import "./item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { withRouter } from 'react-router-dom';


const Item = ({ item, addItem, history, match }) => {
  const {name, price, imageUrl, itemUrl} = item;
  return (
    <div className="item">
      <div
        onClick={(match.params.collectionId !== undefined)?() => history.push(`${match.url}/${name}`):() => history.push(`${match.url}/${itemUrl}/${name}`)}
        className="image"
        style={{
          backgroundImage: `url(${imageUrl[0]})`,
        }}
      ></div>
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton className="custom-button" onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(Item));
