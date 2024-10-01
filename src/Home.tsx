import { useState } from 'react'
import { Link } from 'react-router-dom'
import { componentsData } from './data/componentsData'
import './Home.css'

const ComponentCard = ({ staticImageUrl, componentName, linkUrl, index }: {
    staticImageUrl: string;
    componentName: string;
    linkUrl: string;
    index: number;
}) => {
    return (
        <Link to={linkUrl} key={index} className="home-card">
            <div className="top">
                <img className="gif" src={staticImageUrl} alt={componentName} />
            </div>
            <div className="bottom">
                <h3>{componentName}</h3>
            </div>
        </Link>
    );
};

export default function HomePage() {
    const [components] = useState(componentsData);

    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to My React Component Library</h1>
                <p>
                    This page serves as a comprehensive record of my journey in building a React Component Library.
                    Throughout this process, I will be sharing detailed insights, challenges, and discoveries that I encounter along the way.
                    My goal is to document each step of the learning experience, offering valuable takeaways for anyone interested in creating their own React components.
                </p>
            </header>
            <div className="home-cards">
                {components.map((component, index) => (
                    <ComponentCard
                        key={index}
                        staticImageUrl={component.img || ''}
                        componentName={component.name}
                        linkUrl={component.link}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
