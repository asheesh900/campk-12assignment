import React, { Component } from 'react'
import "../App.css"
import SmallCards from './SmallCards'
import Navbar from './Navbar'
import BigCard from './BigCard'

export default class Home extends Component {
    render() {
        let imgUrl = [`/images/home/androidRobot.jpg`,
                        `/images/home/webDevelopment.jpg`,
                        `/images/home/virtualReality.jpeg`
                     ]
        let cardTitle = [`Android App Development Level 1`,
                            `Web Development Level 1`, 
                          `Virtual Reality Level 1`
                        ]

        let grades = [`4 - 8`, `4 - 12`, `5 - 12`]

        let preRequisite = [`Yes`, `Yes`, `Yes`]

        let skills = [
                      [`ANDROID`, `UI/UX`, `+4`],
                      [`HTML`, `CSS`, `+1`],
                      [`VR`, `JAVASCRIPT`, `+4`]
                     ]

        let prices = [`Rs. 6,000`, `Rs. 6,000`, `Rs. 8,000`]
        return (
            <>
                <div className = "container-fluid BG_Header">
                    <div className="container containerBox">
                        
                        {/* Navbar */}

                        <Navbar />

                        {/* mainHeader */}

                        <div className="
                            justify-content-between d-flex flex-row flex-wrap">
                                <div className = "col-sm-12 col-md-8 col-lg-6 mt-4 Welcome-to-the-school">
                                    <h1 className="display-4">Welcome to the<br/> 
                                    school of the future.</h1>

                                    <h3 className = "Cutting-edge-technology mt-4">Cutting-edge technology courses for Ages 8 - 18.<br/>
                                        Unlock <em className="text-style-1"> 21st century skills</em>, earn 
                                        <img src="/images/home/camp-k-12-coins-copy-2 (1).svg"
                                        alt ="campK-12Coins" />, and build<br/> 
                                        a college-ready portfolio as you learn.</h3>
                                </div>

                                <div className = "col-sm-12 col-md-8 col-lg-6 mt-4">
                                    <img src="/images/home/header-photo_2020-04-21/header-photo.png"
                                    alt="headerPhoto" 
                                    className = ""/>
                                </div>
                        </div>

                        {/* Background Rectangle */}

                        <div className="Rectangle-24"></div>

                        {/* Part-2 */}
                        <div className = "part2 col-8">
                            <h1 className="text-light text-center">What do you want to learn?</h1>
                            <div className = "d-flex flex-row justify-content-center align-items-center">

                                <div className="Background-Color d-flex justify-content-center align-items-center">
                                    <img src="/images/home/shape.svg" alt="leftArrow"/> </div>

                                <div className="smallCards d-flex flex-row m-auto">
                                    <SmallCards imgUrl = {"/images/home/group-14.svg"} content = {"Web Development"} />
                                    <SmallCards imgUrl = {"/images/home/icon.svg"} content = {"Mobile App Development"} />
                                    <SmallCards imgUrl = {"/images/home/icon (1).svg"} content = {"Mixed Reality (AR/VR)"} />
                                    <SmallCards imgUrl = {"/images/home/group-3.svg"} content = {"Mixed Reality (AR/VR)"} />
                                </div>

                                <div className="Background-Color d-flex justify-content-center align-items-center">
                                    <img src="/images/home/shape (1).svg" alt="rightArrow"/></div>
                            </div>
                        </div>

                        <div className="adjustment1"></div>

                        {/* Upcoming Courses */}

                        <div className="upcomingCoureses ">
                            <div className = "d-flex">
                                <h2 className = "mr-4 text-dark">Upcoming online courses</h2>
                                <div className = "d-flex liveButton justify-content-center align-items-center">
                                    <span className="Oval"></span>
                                    <span className = "text-white">LIVE</span>
                                </div>
                            </div>

                            <p className = "text-dark">Learn from live teachers, not pre-recorded videos,
                                 in our intelligent virtual classrooms.</p>

                            <div className = "d-flex">
                                <p className = "mr-4 text-dark"><img src="/images/home/shield-3.svg"
                                 alt="skillShield" /> = 21st century skills you’ll unlock</p>
                                <p className = "ml-4 text-dark"><img src="/images/home/camp-k-12-coins-copy-2 (1).svg"
                                    alt ="campK-12Coins" />= coins you’ll earn for completion</p>
                            </div>
                        </div>

      
                        {/* big cards */}

                        <div className="bigCards ">
                            <BigCard imgUrl = {imgUrl[0]} cardTitle = {cardTitle[0]} 
                                grades = {grades[0]} preRequisite = {preRequisite[0]}
                                skills = {skills[0]} prices = {prices[0]}  />

                            <BigCard imgUrl = {imgUrl[1]} cardTitle = {cardTitle[1]} 
                                grades = {grades[1]} preRequisite = {preRequisite[1]}
                                skills = {skills[1]} prices = {prices[1]}  />

                            <BigCard imgUrl = {imgUrl[2]} cardTitle = {cardTitle[2]} 
                                grades = {grades[2]} preRequisite = {preRequisite[2]}
                                skills = {skills[2]} prices = {prices[2]}  />
                        </div>
                        
                    </div>
                </div>

                
                {/* footer */}

                <div className = "Rectangle">Questions? Contact us at <strong className = "ml-2"> info@campk12.com</strong></div>
            </>
        )
    }
}
