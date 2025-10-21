import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";


const Navbar = () => {
  return (
    <div className="bg-slate-100 py-2 border-b border-b-slate-300">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        
        {/* Active routes */}
        <ul className="flex items-center gap-2">
          <li>
            <NavLink to={"/"} className={({isActive})=>(isActive?"text-purple-500":"text-black")}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"} className={({isActive})=>(isActive?"text-purple-500":"text-black")}>About US</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} className={({isActive})=>(isActive?"text-purple-500":"text-black")}>Profile</NavLink>
          </li>
        </ul>

        {/* Only show the Sign In button */}
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-600 transition-colors">
          <Link to="/signin">Sign In</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
