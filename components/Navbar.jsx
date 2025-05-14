import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-center gap-6 sticky top-0 z-50 shadow">
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Home </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Projects </NavLink>
            <NavLink to="/games" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Games </NavLink>
            <NavLink to="/techstack" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Tech Stack </NavLink>
            <NavLink to="/casestudies" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Case Studies </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Contact </NavLink>
            <NavLink to="/now" className={({ isActive }) => isActive ? "font-bold underline" : ""}> Now </NavLink>
        </nav>
    );
}

export default Navbar;