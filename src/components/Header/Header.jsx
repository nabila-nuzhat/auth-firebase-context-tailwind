import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            {/* Daisy UI tailwind Navbar code START------------ */}
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master Daisy</a>
                {/* Daisy UI tailwind Navbar main code END------------ */}

            {/* MY OWN code */}
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            </div>
            {/* Daisy UI tailwind Navbar code div CLOSING------------ */}
        </nav>
    );
};

export default Header;