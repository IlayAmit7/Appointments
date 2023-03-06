import { NavLink } from "react-router-dom";


function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/teams">Teams</NavLink>
            <span> | </span>
            <NavLink to="/appointments">Appointments</NavLink>
            <span> | </span>
            <NavLink to="/appointments/new">New</NavLink>
        </div>
    );
}

export default Menu;
