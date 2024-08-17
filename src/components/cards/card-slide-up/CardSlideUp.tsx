
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CardSlideUp.css';

gsap.registerPlugin(ScrollTrigger);

const CardSlideUp: React.FC = () => {

    useEffect(() => {
        // apply parallax effect to any element with a data-speed attribute
        gsap.to("[data-speed]", {
            y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
            ease: "none",
            scrollTrigger: {
                start: 0,
                end: "max",
                invalidateOnRefresh: true,
                scrub: 0
            }
        });

    }, []);


    return (
        <div className='slide-up-box'>
            <div className="box-container">
                <div className="box green" data-speed="0.25">0.25</div>
                <div className="box purple" data-speed="0.4">0.4</div>
                <div className="box orange" data-speed="0">0</div>
                <div className="box red" data-speed="1">1</div>
                <div className="box blue" data-speed="0.75">0.75</div>
            </div>
        </div>
    );
};


export default CardSlideUp;
