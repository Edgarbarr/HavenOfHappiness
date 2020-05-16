import React from "react";
import Item from "../item/item.component"
import "./item-preview.styles.scss";

const ItemPreview = (category) => {
    console.log(category)
    const {title, items} = category;
    const itemsArray = Object.keys(items).map(item => items[item]);
    return (<div className="item-preview"> 
    
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {itemsArray.filter((item, index) => index < 5).map((item) => {
                return <Item key={item.id} item={item}/>
            })}
        </div>
    </div>)
}

export default ItemPreview;