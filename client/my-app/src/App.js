import React from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AboutPage from "./component/AboutPage";
import CoursePage from "./component/CoursePage";
import Nav from "./component/Nav";
import PageNotFound from "./component/PageNotFound";
import Welcome from "./component/Welcome";
import ManageCoursePage from "./component/MangeCoursePage";
import  CreateCourse from "./component/CreateCourse";
import "./css/index.css"
import { useState,useEffect } from 'react';

function App() {
  const [country,setcountry]=useState([]);
  useEffect(() => {
    const dataApi= async()=>{
      try {
        const data=await fetch('https://restcountries.com/v3.1/all');
       const json=await data.json();
       setcountry(json)
       console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  dataApi()
   }, []);
 return(
 <>
 <Nav/>
 <Routes>
     <Route path="/" element={<HomePage/>}/>

     <Route path='/about/*' element={<AboutPage />}>
          <Route path='newuser' element={<Welcome />} />
        </Route>


     <Route path="/course" element={<CoursePage/> }/>
     <Route path='/course/:slug' element={<ManageCoursePage />} />
    <Route path="/create-course" element={< CreateCourse/>}/>
     <Route path="*" element={<PageNotFound/>}/>
 </Routes>
 </>
 );
}

export default App;
