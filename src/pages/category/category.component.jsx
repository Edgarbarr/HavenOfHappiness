import React from 'react';
import './category.styles.scss';
import Item from '../../components/item/item.component';
import { connect } from 'react-redux';
import {selectCategory, selectCategoryForPreview} from '../../redux/shop/shop.selectors';
const CategoryPage = ({category, item}) => {
    const {title} = category;
    return (<div className='category-page'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='items'>
            {item.map(item => {
                return <Item className="item" key={item.id} item={item}/>
            })}
        </div>
    </div>)
}

const mapStateToProps = (state, ownProps)=> ({
    category: selectCategory(ownProps.match.params.categoryId)(state),
    item: selectCategoryForPreview(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);