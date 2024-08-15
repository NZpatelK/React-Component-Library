import { Link } from 'react-router-dom'

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
                <Link to="/React-Component-Library" className="home-card">
                    <div className="top">
                        <h1>preview</h1>
                    </div>
                    <div className="bottom">
                        {/* <Link className='link' to="/React-Component-Library">Link to preview</Link> */}
                        <p>This is a preview</p>
                    </div>
                </Link>
                <Link to="/React-Component-Library" className="home-card">
                    <div className="top">
                        <h1>preview2</h1>
                    </div>
                    <div className="bottom">
                        {/* <Link className='link' to="/React-Component-Library">Link to preview2</Link> */}
                        <p>This is a preview2</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
