import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ItemPreview from '../item-preview/item-preview.component';
import { selectInventoryForPreview} from "../../redux/shop/shop.selectors";
import './inventory-overview.styles.scss';

const InventoryOverview = ({ inventory }) => (
    
  <div className="inventory-overview">
      {console.log(inventory)}
    {inventory.map(({ id, ...otherInventoryProps }) => {
      return <ItemPreview key={id} {...otherInventoryProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
    inventory: selectInventoryForPreview,
});

export default connect(mapStateToProps)(InventoryOverview);