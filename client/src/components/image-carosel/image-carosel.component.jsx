import React,{ useState } from "react";
import "./image-carosel.styles.scss";
import ItemOverview from "../item-overview/item-overview.component";
const ImageCarosel = ({item}) => {
  const {imageUrl}= item;
  const [mainViewerImage, setMainViewerImage] = useState(imageUrl[0])
    const mouseMoveHandler = event => {
        let mouseX = event.pageX/(event.target.width*1.5)*100+"%";
        let mouseY = event.pageY/(event.target.height*1.5)*100+"%";
        event.target.style.transformOrigin = `${mouseX} ${mouseY}`; 
    }

  return (
    <div className="image-carosel">
      <div className="thumbnails">
        {imageUrl.map(image => {
          return (<div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src={image}
          />
        </div>)
        })}
      </div>
      <div className="image-main-viewer" >
        <img
          className="main-image"
          onMouseMove={mouseMoveHandler}
          src={mainViewerImage}
        />
      </div>
    </div>
  );
};
export default ImageCarosel;
