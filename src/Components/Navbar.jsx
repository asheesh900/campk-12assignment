import React from 'react'
import '../App.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><img src="/images/home/camp-k-12-logo.svg" alt="campK-12Logo"/></li>
            </ul>
            
            <ul className = "innerUl">
                <li><img src="/images/home/leaderboard.svg" alt="leaderboardIcon"/></li>
                <li><img src="/images/home/group-36.svg" alt="notificationIcon"/></li>
                <li className = "skill"><span><img src="/images/home/skill-icon.svg" alt="skillIcon"/>100</span></li>
                <li><img src="/images/home/profileIcon.png" alt="profileIcon" style = {{height:"34px", width: "34px"}} /></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
