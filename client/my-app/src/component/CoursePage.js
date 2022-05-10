import React from "react";
import {Button} from "react-bootstrap"
import {useNavigate}from  "react-router-dom"
import CourseList from "./CourseList"
import coursesData from "./data"
const CoursePage=()=>{
    const navigate=useNavigate();
    return(
        <>
        <h1>CoursePage</h1>
        <Button className="btn-corse" onClick={()=>navigate("/create-course")}>Create Corse</Button>
        <CourseList coursesData={coursesData}/>
        </>
    )
}
export default CoursePage;