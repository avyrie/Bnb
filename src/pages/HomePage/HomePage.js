import React from 'react';
import ShopFront from "../../images/shopfrontlay.png"
import Clouds from "../../images/clouds.png"
import Welcome from "../../images/welcomepanel.png"
import './HomePage.css'

function HomePage() {
    console.log("Home Page is working")
    return (
        <div className="home">
            Home Page
            {/* <div className="homebox">
                <iframe className="iframe" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEOAbcwXrU&#x2F;view?embed">
                </iframe>
            </div> */}
            <div className="store-container">
                <img className="store" src={ShopFront} />
                <div className="clouds">
                    <img src={Clouds} />
                    <img src={Clouds} />
                    <img src={Clouds} />
                    <img src={Clouds} />
                    <img src={Clouds} />
                </div>
            </div>
                <div className="line">
                </div>
                <div className="welcome">
                    <img src={Welcome} />
                </div>
        </div>
    )
}

export default HomePage