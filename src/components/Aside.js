import { Link } from "react-router-dom";
const Aside = () =>{
    return(
    <>
   <Link exact to = '/'> <h1>Home</h1> </Link>
   <Link to = '/aboutus'><h1>About Us</h1></Link>
    </>
    )
}
export default Aside;
