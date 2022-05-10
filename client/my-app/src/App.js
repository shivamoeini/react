import React from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AboutPage from "./component/AboutPage";
import CoursePage from "./component/CoursePage";
import Nav from "./component/Nav";
import PageNotFound from "./component/PageNotFound";
import Welcome from "./Welcome";
function App() {
 return(
 <>
 <Nav/>
 <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route  path="/about" element={<AboutPage/>}>
         <Route  path="/about" element={<Welcome/>}/>
     </Route>
     <Route path="/course" element={<CoursePage/> }/>

     <Route path="/*" element={<PageNotFound/>}/>
 </Routes>
 </>
 );
}

export default App;
