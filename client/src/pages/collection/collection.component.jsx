import React from 'react';
import './collection.styles.scss';
import Item from '../../components/item/item.component';
import { connect } from 'react-redux';
import {selectCollection, selectCollectionItemsForPreview} from '../../redux/shop/shop.selectors';
const CollectionPage = ({collection, collectionItemsArray}) => {
    const {title} = collection;
    return (<div className='collection-page'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='items'>
            {collectionItemsArray.map(item => {
                return <Item className="item" key={item.id} item={item}/>
            })}
        </div>
    </div>)
}

const mapStateToProps = (state, ownProps)=> ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    collectionItemsArray: selectCollectionItemsForPreview(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);