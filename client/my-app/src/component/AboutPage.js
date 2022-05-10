import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
function AboutPage(){
const[parallelValue,setParallelValue]=useState("");
const[descValue,setDescValue]=useState("");
const[text,setText]=useState("");
function handleSubmit(e){
    e.preventDefault();
    setText(descValue);
}

    return(
        <section>
        <h1>AboutPage</h1>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="newuser">New User</Link>
        <Outlet/>
        <form className="forms" onSubmit={handleSubmit}>
        <label>type and submit change</label>
        <input type='text' name='parallel' id='parallel' value={parallelValue}
        onChange={e=> setParallelValue(e.target.value)}/>
       <label>type and submit on click the button</label>
       <input type="text" name="describe" id="describe" value={descValue} onChange={e =>setDescValue(e.target.value)}/> 
       <Button type='submit'>Submit</Button>
        </form>
        {parallelValue && <p>{parallelValue}</p>}
        {text && <p>{text}</p>}
        </section>
    )
}
export default AboutPage;