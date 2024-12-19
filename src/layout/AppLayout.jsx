import React from 'react'
import './AppLayout.style.css'
import { Link } from 'react-router-dom'
const AppLayout = () => {
    return (
        <div className="AppLayout">
            <nav>
                <ul>
                    <li><Link to="/movie">Movie</Link></li>
                    <li><Link to="/tv">tv</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default AppLayout