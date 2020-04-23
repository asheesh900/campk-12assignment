import React from 'react'

function NavbarCourse() {
    return (
        <nav>
            <ul>
                <li><img src="/images/home/camp-k-12-logo.svg" alt="campK-12Logo"/></li>
                <li><button>ONLINE COURSES</button></li>
                <li><button>OFFLINE CAMPS</button></li>
                <li><button>REFER & EARN</button></li>

            </ul>
            
            <ul className = "innerUl">
                <li><img src="/images/home/leaderboard.svg" alt="leaderboardIcon"/></li>
                <li className = "skill"><span>FREE TRIAL</span></li>
                <li className = "skill"><span>LOG IN</span></li>
            </ul>
            
        </nav>
    )
}

export default NavbarCourse
