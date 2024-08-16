import './FlipCard3dEffects.css';

function FlipCard3dEffects() {
    return (
        <div className='flipCardHoverEffectsPage'>
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