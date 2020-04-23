import React from 'react'

function Showcase() {
    return (
        <>
            <h2 className = "font-weight-bold mb-5">ONLINE COURSES</h2>
            <div className=" row courses">
                <div className="col-3">
                    <img src="/images/course/group-40.svg" alt="groupIcon"/>
                    <h6>Learn interactively.</h6>
                    <p>LIVE online sessions with our <br/> 
                    expert mentors. See a demo.</p>
                </div>
                <div className="col-3">
                    <img src="/images/course/woman-copy.svg" alt="homeIcon"/>
                    <h6>Learn from anywhere.</h6>
                    <p>Convenience and safety for you <br/> 
                    and your child.</p>
                </div>
                <div className="col-3">
                    <img src="/images/course/woman-copy-2.svg" alt="pioneerIcon"/>
                    <h6>Learn from the pioneers.</h6>
                    <p>We’ve been teaching kids to <br/>
                        code since 2010.  Read more.</p>
                </div>
                <div className="col-3">
                    <img src="/images/course/woman-copy-2 (1).svg" alt="tabletIcon"/>
                    <h6>Learn by doing.</h6>
                    <p>100% project-based curriculum. <br/>
                        Solve real-world problems. </p>
                </div>
            </div>
            <button className = "btnBookTrial">BOOK A FREE TRIAL</button>
        </>
    )
}

export default Showcase
