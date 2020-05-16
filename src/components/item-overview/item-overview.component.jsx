import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './item-overview.styles.scss';
const ItemOverview = ({item}) => {
    return (
        <div className='item-overview'>
            <h1 className="name">{item.name}</h1>
            <p className="sub-name">Adorable crinkle french fried potatoe charm to bring with you everywhere !</p>
            <div className='price-container'>
                <span className='price'>${item.price}</span>
            </div>
            <select name='nugget-type'className='options'>
                <option>Select an option</option>
                <option>Fullsize</option>
                <option>Popcorn</option>
            </select>
            <select name='finish'className='options'>
                <option>Select an option</option>
                <option>Keychain</option>
                <option>Charm</option>
            </select>
            <select name='quantity'className='options'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <CustomButton >ADD TO CART</CustomButton>
        </div>
    )
}

export default ItemOverview;