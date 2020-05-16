import React from 'react';
import ImageCarosel from '../../components/image-carosel/image-carosel.component';
import './itempage.styles.scss';
import { selectItem } from '../../redux/shop/shop.selectors';
import ItemOverview from '../../components/item-overview/item-overview.component';
import { connect } from 'react-redux';
const ItemPage = ({item}) => {
    
    return(<div className="item-page">  
        <ImageCarosel item={item}/>
        <ItemOverview item={item}/>
    </div>)
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params.categoryId, ownProps.match.params.itemId)(state)
})
export default connect(mapStateToProps)(ItemPage);