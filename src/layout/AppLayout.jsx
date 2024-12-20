import React from 'react'
import './AppLayout.style.css'
import { Link } from 'react-router-dom'
const AppLayout = () => {
    return (
        <div className="AppLayout">
            <nav>
                <ul>
                    <li><Link to="/media">Movie&Tv</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default AppLayout