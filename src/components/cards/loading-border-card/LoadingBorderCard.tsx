import './LoadingBorderCard.css';

export default function LoadingBorderCard() {

    return (
        <div className="loading-border-card-page">
            {Array.from({ length: 6 }).map((_, i) => (
                <div className="loading-border-box" key={i}>
                    <div className='loading-border-loader'>
                        <span className="loading-border-text">Loading...</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
