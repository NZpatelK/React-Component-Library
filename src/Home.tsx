import { useState } from 'react'
import { Link } from 'react-router-dom'
import { componentsData } from './data/componentsData'
import './Home.css'

const HoverCard = ({ staticImg, gifImg, title, link, index }: { staticImg: string, gifImg: string, title: string, link: string, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
            <Link to={link} key={index} className="home-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="top">
                    <img
                        className="gif"
                        src={isHovered ? gifImg : staticImg}
                        alt={title}
                    />
                </div>
                <div className="bottom">
                    <h3>{title}</h3>
                </div>
            </Link>
    );
};

export default function Home() {
    return (
        <div className='home'>
            <div className="home-header">
                <h1>Welcome My React Component Library</h1>
                <p> "This journal serves as a comprehensive record of my journey in building a React Component Library.
                    Throughout this process, I will be sharing detailed insights, challenges, and discoveries that I encounter along the way.
                    My goal is to document each step of the learning experience, offering valuable takeaways for anyone interested in creating their own React components."</p>
            </div>
            <div className="home-cards">

                {componentsData.map((component, index) => (
                    <HoverCard
                        staticImg={component.img}
                        gifImg={component.gif}
                        title={component.name}
                        link={component.link}
                        index={index}
                    />
                ))}

            </div>
        </div>
    )
}
