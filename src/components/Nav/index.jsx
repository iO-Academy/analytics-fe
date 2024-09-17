import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="mb-10 px-5 py-3 bg-slate-300">
            <NavLink to="/" className="text-2xl">Home</NavLink>
        </nav>
    )
}