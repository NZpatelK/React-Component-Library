import { Link } from 'react-router-dom'
import cardTiltEffectGif from './assets/3D-card-tilt.gif'
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
                <Link to="3d-card-tilt-effect" className="home-card">
                    <div className="top">
                        <img src={cardTiltEffectGif} alt="" className='gif' />
                    </div>
                    <div className="bottom">
                        <h3>3D Card Tilt Effect</h3>
                    </div>
                </Link>
                <Link to="/React-Component-Library" className="home-card">
                    <div className="top">
                        <h1>preview2</h1>
                    </div>
                    <div className="bottom">
                        <h3>This is a preview2</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}
