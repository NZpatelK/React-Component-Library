import { useResponsiveTSX } from '../../../useResponsiveTSX';
import './CardFlippingAnimation.css';

function CardFlippingAnimation() {

    const breakpoint = useResponsiveTSX([600, 900, 1200]);

    return (
        <div className='CardFlippingAnimationPage'>
            <div className={ breakpoint <= 1 ? "mobile-view Container" : "Container"}>
                <div className="wrapper">
                    <div className="card">
                        <div className="front">
                            <h1>Hooker Valley</h1>
                        </div>
                        <div className="back">
                            <h4>Hooker Valley</h4>
                            <p>
                                Hooker Valley, nestled in the breathtaking Southern Alps of New Zealand,
                                beckons adventurers with its pristine beauty and awe-inspiring vistas,
                                as they traverse its well-maintained trails and bridges,
                                culminating in a stunning glacial lake surrounded by majestic snow-capped peaks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <div className="front">
                            <h1>Hooker Valley</h1>
                        </div>
                        <div className="back">
                            <h4>Hooker Valley</h4>
                            <p>
                                Hooker Valley, nestled in the breathtaking Southern Alps of New Zealand,
                                beckons adventurers with its pristine beauty and awe-inspiring vistas,
                                as they traverse its well-maintained trails and bridges,
                                culminating in a stunning glacial lake surrounded by majestic snow-capped peaks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <div className="front">
                            <h1>Hooker Valley</h1>
                        </div>
                        <div className="back">
                            <h4>Hooker Valley</h4>
                            <p>
                                Hooker Valley, nestled in the breathtaking Southern Alps of New Zealand,
                                beckons adventurers with its pristine beauty and awe-inspiring vistas,
                                as they traverse its well-maintained trails and bridges,
                                culminating in a stunning glacial lake surrounded by majestic snow-capped peaks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardFlippingAnimation;