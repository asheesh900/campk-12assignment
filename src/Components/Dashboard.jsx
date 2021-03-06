import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Courses from './Courses'

export default class Dashboard extends Component {
    render() {
        return (
            <>
               <div className = "d-flex justify-content-between">
                   <Link className = "btn btn-primary text-light m-1" to = "/home">Home</Link>
                   <Link className = "btn btn-primary text-light m-1" to = "/courses">Courses</Link>
               </div> 

               <div>
                   <Route path = "/home" component = {Home} />
                   <Route path = "/courses" component = {Courses} />
               </div> 
            </>
        )
    }
}
