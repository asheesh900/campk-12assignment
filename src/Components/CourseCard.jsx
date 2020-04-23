import React from 'react'

function CourseCard({imgUrl, cardTitle, level, grades, prices, discount}) {
    return (
        <div className="card text-dark m-3" style = {{width: "18rem"}}>
            <img src = {imgUrl} className="card-img-top courseCardImage" alt = "AI" />
            <div className="card-body courseCardBody">
                <h5 className="card-title text-dark courseCardTitle">{cardTitle}</h5>

                <div className = "courseCardBody1 d-flex ">
                        <span className = "text-secondary ">LEVEL</span>
                        <span className = "mx-2 text-dark">{level}</span>
                        <span className = "text-secondary ml-4">GRADES</span>
                        <span className = "ml-2 text-dark">{grades} </span>
                </div>

                <hr/>

                <div className = "courseCardBody2 text-secondary">
                    <div > <img src="/images/course/path-copy-9.svg" 
                        alt="curveIcon"/> <span className = "m-2"><strong> 5.6k </strong> Happy Students </span> </div>
                    <div> <img src="/images/course/icon-copy-12.svg" 
                        alt="durationIcon"/> <span className = "m-2"><strong> 12 Hours </strong> over 6 Sessions</span> </div>
                    <div > <img src="/images/course/shape-copy-10.svg" 
                        alt="timeIcon"/> <span className = "m-2">Weekend and Weekday Batches</span> </div>  
                </div>

                <div className="d-flex justify-content-between py-0 my-0">
                    <span className = "price font-weight-bold"><img src="/images/course/rupees-icon-copy.svg"
                     alt="rupeeIcon"/> {prices} <strike className = "text-muted">12000</strike></span>

                    <span className = "discount text-success"><img src="/images/course/offers-icon-copy.svg"
                     alt="offersIcon"/> {discount}% off</span>
                </div>

                <hr/>

                <span className = "btnLearnMore">
                    <button >LEARN MORE</button>
                </span>
            </div>

            
        </div>
    )
}

export default CourseCard
