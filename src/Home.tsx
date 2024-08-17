import { Link } from 'react-router-dom'
import {componentsData} from './data/componentsData'
import './Home.css'

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
                    <Link to={component.link} key={index} className="home-card">
                        <div className="top">
                            <img src={component.image}  alt="" className='gif' />
                        </div>
                        <div className="bottom">
                            <h3>{component.name}</h3>
                        </div>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}
