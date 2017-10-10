import React from 'react';

const Carousel = ({img1,img2,img3})=>(
    <div id="first-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#first-carousel" data-slide-to="0" className=""></li>
            <li data-target="#first-carousel" data-slide-to="1" className=""></li>
            <li data-target="#first-carousel" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
            <div className="item">
                <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" width="100%" alt="First slide" src={`../../images/${img1}`} />
            </div>
            <div className="item">
                <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" width="100%"  alt="Second slide" src={`../../images/${img2}`} />
            </div>
            <div className="item active">
                <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" width="100%"  alt="Third slide" src={`../../images/${img3}`} />
            </div>
        </div>
    </div>
)

export default Carousel;

