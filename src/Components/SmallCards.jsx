import React from 'react'

function SmallCards({imgUrl, content}) {
    return (
        <div className="m-2">
            <div className="card d-flex align-items-center" style={{"width": "12rem"}}>
                <img src={imgUrl} className="card-img-top Group-14 mt-4" alt="webDevelopment"/>
                <div className="card-body ">
                    <h5 className="card-title Sample-text text-center text-dark">{content} </h5>
                </div>
            </div>
        </div>
    )
}

export default SmallCards
