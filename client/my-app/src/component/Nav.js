import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
    const activeStyle={
        color:"orange",
       
    }
  return (
    <div className="navbar" style={{display:"flex",justifyContent:"space-around" }}>
      <h2>
          <NavLink to="/" style={({isActive})=>(isActive?activeStyle:null)}>Home</NavLink>
      </h2>
      <h2>
      <NavLink to="/course" style={({isActive})=>(isActive?activeStyle:null)}>Course</NavLink>
      </h2>
      <h2>
      <NavLink to="/about" style={({isActive})=>(isActive?activeStyle:null)}>About</NavLink>
      </h2>
    </div>
  );
}
