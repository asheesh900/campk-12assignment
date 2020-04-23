import React from 'react'

function BigCard({imgUrl, cardTitle, grades, preRequisite, skills, prices}) {
    return (
        <div className="card text-dark m-2" style = {{width: "22rem"}}>
            <img src = {imgUrl} className="card-img-top cardImage" alt = "androidRobot" />
            <div className="card-body ">
            <h5 className="card-title text-dark">{cardTitle}</h5>

            <hr/>

            <div className = "d-flex justify-content-center">
                <div className = "mr-4">
                    <span className="mr-2"><img src="/images/home/fill-1.svg" alt="gradesIcon"/></span>
                    <span className = "text-secondary cardBody1">GRADES</span>
                    <p className = "ml-4 text-dark">{grades}</p>
                </div>
                <div>
                    <span className="mr-2"><img src="/images/home/icon (2).svg" alt="preRequisiteIcon"/></span>
                    <span className = "text-secondary cardBody1">PRE-REQ</span>
                    <p className = "ml-4 text-dark">{preRequisite} </p>

                </div>
            </div>

            <hr/>

            <ul>
                <li><img src="/images/home/skill-icon.svg" alt="skillIcon"/> </li>
                <span className = "listItems1">{skills[0]} </span>
                <span className = "listItems1">{skills[1]} </span>
                <span className = "listItems1">{skills[2]}</span>
            </ul>
            <ul>
                <li><img src="/images/home/camp-k-12-coins-copy-2 (1).svg" alt="coinIcon"/></li>
                <span className = "listItems2">+1000</span>
            </ul>

            <hr/>

            <ul className = "cardBody3 text-secondary">
                <li > <img src="/images/home/combined-shape.svg" 
                    alt="calenderIcon"/> <span>17th Feb (in 4 days)</span> </li>
                <li> <img src="/images/home/icon (3).svg" 
                    alt="dayIcon"/> <span>Mon, Tue & Wed</span> </li>
                <li > <img src="/images/home/icon (4).svg" 
                    alt="timeIcon"/> <span>6:00PM to 7:00PM</span> </li>  
            </ul>

            <hr/>

            <div className="d-flex justify-content-between py-0 my-0">
                <span className = "price">{prices}</span>
                <button className = "enroll">ENROLL</button>
            </div>
            </div>

            
        </div>
    )
}

export default BigCard
