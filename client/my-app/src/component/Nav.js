import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
    const activeStyle={
        color:"orange",
    }
  return (
    <div>
      <h3>
          <NavLink to="/" >Home</NavLink>
      </h3>
      <h3>
      <NavLink to="/course">Course</NavLink>
      </h3>
      <h3>
      <NavLink to="/about" >About</NavLink>
      </h3>
    </div>
  );
}
