import React from "react";
import Directory from "../../components/directory/directory.component"
import {HomePageContainer} from './homepage.styles.jsx';
import './homepage.styles.scss'
const HomePage = () => {
    return (
    <HomePageContainer className="homepage">
        <div className="banner-container">
            <h1 className='banner-title'>Haven Of Happiness</h1>
            <p className='banner-description'>Only 5 days left for our huge 30% off sale!</p>
            <img className="banner-image" src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </div>
        <Directory/>
    </HomePageContainer>
    )
}
export default HomePage;