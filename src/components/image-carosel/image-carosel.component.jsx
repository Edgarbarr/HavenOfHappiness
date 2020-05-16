import React,{ useState } from "react";
import "./image-carosel.styles.scss";
const ImageCarosel = ({item}) => {
  const [mainViewerImage, setMainViewerImage] = useState(item.imageUrl)
    const mouseMoveHandler = event => {
        let mouseX = event.pageX/(event.target.width*1.5)*100+"%";
        let mouseY = event.pageY/(event.target.height*1.5)*100+"%";
        event.target.style.transformOrigin = `${mouseX} ${mouseY}`; 
    }
  return (
    <div className="image-carosel">
      <div className="thumbnails">
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/e76d79/1877667482/il_1588xN.1877667482_gjv6.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/07b5a5/1925189021/il_794xN.1925189021_el8b.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/d761a2/1877667416/il_794xN.1877667416_jqd1.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/07b5a5/1925189021/il_794xN.1925189021_el8b.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/d761a2/1877667416/il_794xN.1877667416_jqd1.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            onClick={(e)=> setMainViewerImage(e.target.src)}
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/07b5a5/1925189021/il_794xN.1925189021_el8b.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/d761a2/1877667416/il_794xN.1877667416_jqd1.jpg"
          />
        </div>
        <div className="thumbnail-container">
          <img
            className="thumbnail-image"
            src="https://i.etsystatic.com/19638897/r/il/07b5a5/1925189021/il_794xN.1925189021_el8b.jpg"
          />
        </div>
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
