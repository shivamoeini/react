import React from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AboutPage from "./component/AboutPage";
import CoursePage from "./component/CoursePage";
import Nav from "./component/Nav";
import PageNotFound from "./component/PageNotFound";
function App() {
 return(
 <>
 <Nav/>
 <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/course" element={<CoursePage/> }/>
     <Route path="/about" element={<AboutPage/>}/>

     <Route path="/*" element={<PageNotFound/>}/>
 </Routes>
 </>
 );
}

export default App;
