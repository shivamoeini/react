import { Link, Outlet } from "react-router-dom";
function AboutPage(){
    return(
        <>
        <h1>AboutPage</h1>
        <Link to="/">Home |</Link>
        <Link to="new-user">New User Welcome</Link>
        <Outlet/>
        </>
    )
}
export default AboutPage;