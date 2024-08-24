import React from 'react';
import './SubCardPopUp.css';

export default function SubCardPopUp() {
    return (
        <div className="subcard-popup-container">
            <div className="subcard_card_container">
                <article className="card_article">
                    <div className="card_img">
                    </div>
                    <div className="card_content">
                        <span className="card_description"> Description of the card here </span>
                        <h2 className="subCard_title"> Card Title </h2>
                        <a href="#" className='card_link'>Read More</a>
                    </div>
                </article>
                <article className="card_article">
                    <div className="card_img">
                    </div>
                    <div className="card_content">
                        <span className="card_description"> Description of the card here </span>
                        <h2 className="subCard_title"> Card Title </h2>
                        <a href="#" className='card_link'>Read More</a>
                    </div>
                </article>
                <article className="card_article">
                    <div className="card_img">
                    </div>
                    <div className="card_content">
                        <span className="card_description"> Description of the card here </span>
                        <h2 className="subCard_title"> Card Title </h2>
                        <a href="#" className='card_link'>Read More</a>
                    </div>
                </article>
            </div>
        </div>
    );
}
