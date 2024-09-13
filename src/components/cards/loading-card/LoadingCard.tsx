import React from 'react';
import './loadingCard.css';

export default function LoadingCard() {
    return (
        <div className="loading-card-page">
            {Array.from({ length: 6 }).map((_, i) => (
                <div className="loading-card" key={i}>
                    <div className="loading-header">
                        <div className="loading-img"></div>
                        <div className="details">
                            <span className="name"></span>
                            <span className="about"></span>
                        </div>
                    </div>
                    <div className="loading-content">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                    <div className="loading-btns">
                        <div className="btn btn-1"></div>
                        <div className="btn btn-2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
