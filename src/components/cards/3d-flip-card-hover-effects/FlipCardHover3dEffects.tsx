import { useResponsiveTSX } from '../../../useResponsiveTSX';
import './FlipCard3dEffects.css';

function FlipCard3dEffects() {

    const breakpoint = useResponsiveTSX([600, 900, 1200]);

    
    return (
        <div className={ breakpoint <= 1 ? "mobile-view flipCardHoverEffectsPage" : 'flipCardHoverEffectsPage'}>
            <div className="container">
                <div className="card-3d">
                    <div className="face front">
                        <h2>First</h2>
                    </div>
                    <div className="face back">
                        <h2>$100,000</h2>
                    </div>
                </div>
                <div className="card-3d">
                    <div className="face front">
                        <h2>Second</h2>
                    </div>
                    <div className="face back">
                        <h2>$10,500</h2>
                    </div>
                </div>
                <div className="card-3d">
                    <div className="face front">
                        <h2>Third</h2>
                    </div>
                    <div className="face back">
                        <h2>$100</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard3dEffects;