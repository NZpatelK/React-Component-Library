import React from 'react';
import shoe2 from '../../../assets/shoes/shoe1.png';
import shoe1 from '../../../assets/shoes/shoe2.png';
import './CardTiltEffect.css';
import Tilt from 'react-parallax-tilt';

const CardTiltEffect: React.FC = () => {
    return (
        <div className='card-tilt-effect-wrapper' >
            <div className="display-cards">
                <Tilt className="tilt-card blue"
                    transitionSpeed={5000}
                    glareEnable={true}
                    glarePosition="all"
                    glareMaxOpacity={0.5}>

                    <div className="product">
                        <span className="number">01</span>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$55.99</span>
                        <img src={shoe1} alt="" />
                    </div>
                    <div className="product-title">
                        <h2>Nike Blue</h2>
                    </div>
                </Tilt>

                <Tilt className="tilt-card purple"
                    transitionSpeed={5000}
                    glareEnable={true}
                    glarePosition="all"
                    glareMaxOpacity={0.5}>
                    <div className="product">
                        <span className="number">02</span>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$45.99</span>
                        <img src={shoe2} alt="" />
                    </div>
                    <div className="product-title">
                        <h2>Nike Purple</h2>
                    </div>
                </Tilt>
            </div>
            {/* <div className="code">
                <h2>Hello</h2>
            </div> */}
        </div>
    );
};

export default CardTiltEffect;