import React from "react";
import Item from "../item/item.component"
import "./collection-preview.styles.scss";

const CollectionPreview = (collection) => {
    const {title, items} = collection;
    const itemsArray = Object.keys(items).map(item => items[item]);
    return (<div className="collection-preview"> 
    
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {itemsArray.filter((item, index) => index < 5).map((item) => {
                return <Item key={item.id} item={item}/>
            })}
        </div>
    </div>)
}

export default CollectionPreview;