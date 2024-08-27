import React from 'react';
import './SubCardPopUp.css';
import img1 from '../../../assets/nature/1.jpeg';
import img2 from '../../../assets/nature/2.jpeg';
import img3 from '../../../assets/nature/3.jpeg';

export default function SubCardPopUp() {
    return (
        <div className="subcard-popup-container">
            <div className="subcard_card_container">
                <article className="card_article">
                    <div className="card_img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="card_content">
                        {/* <span className="card_description"> Description of the card here </span> */}
                        <h2 className="subCard_title"> Water Fall </h2>
                        {/* <a href="#" className='card_link'>Read More</a> */}
                    </div>
                </article>
                <article className="card_article">
                    <div className="card_img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="card_content">
                        {/* <span className="card_description"> Description of the card here </span> */}
                        <h2 className="subCard_title"> Nature Green </h2>
                        {/* <a href="#" className='card_link'>Read More</a> */}
                    </div>
                </article>
                <article className="card_article">
                    <div className="card_img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="card_content">
                        {/* <span className="card_description"> Description of the card here </span> */}
                        <h2 className="subCard_title"> Sunrise Sunset </h2>
                        {/* <a href="#" className='card_link'>Read More</a> */}
                    </div>
                </article>
            </div>
        </div>
    );
}
