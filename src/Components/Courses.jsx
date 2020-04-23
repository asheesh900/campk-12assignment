import React, { Component } from 'react'
import '../Courses.css'
import NavbarCourse from './NavbarCourse'
import Showcase from './Showcase'
import CourseCard from './CourseCard'

export default class Courses extends Component {
    render() {
        let imgUrl = [`/images/course/AI.jpg`]

        let cardTitle = [`AI & Machine Learning: Code Intelligent Bots`]

        let level = [`1`]

        let grades = [`5 - 8`]

        let prices = [`9999`]

        let discount = [16]

        let cards = []
        
        for(let i=0; i<6; i++) {
            cards.push(
                <div className="col-4">
                    <CourseCard imgUrl = {imgUrl[0]} cardTitle = {cardTitle[0]}
                        level = {level[0]}  grades = {grades[0]}
                        prices = {prices[0]} discount = {discount[0]} />
                </div>
            )
        }


        return (
            <>
                <div className = "container-fluid backgroundImage">
                    <div className="container">

                        {/* Navbar */}

                        <NavbarCourse />

                        {/* Showcase online courses */}

                        <div className="showcaseOnlineCourses">
                            <Showcase />
                        </div>

                    </div>
                </div>

                {/* Background Rectangle */}

                <div className="rectangle">
                    <div className="grades">
                        <button className = "btn btn-light">Grades 1-4</button>
                        <button className = "btn btn-primary">Grades 5-8</button>
                        <button className = "btn btn-light">Grades 9 - 12</button>
                    </div>

                    <div className="showingAllCourses">
                        <div className="container">
                            <div className = "row coursesTopbar">
                                <p>Showing<strong> All</strong> courses for<strong> Grades 5-8</strong></p>
                                <select className="" name="allCourses" id="">
                                    <option selected value="allCourse">All Courses</option>
                                </select>
                            </div>

                            {/* Card deck */}

                            <div className="row">
                                {
                                    cards.map(card => card)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
