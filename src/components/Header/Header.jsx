import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    // event handler Logout(sign out), handleLogout Call back function with no parameter
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

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

                {/* condition of user */}
                {
                    user ? <>
                    <span> {user.email}  </span>
                    <button onClick={handleLogOut} className="btn btn-xs">Sign out</button> 
                    </>
                    : <Link to="/login">Login </Link>
                }

            </div>
            {/* Daisy UI tailwind Navbar code div CLOSING------------ */}
        </nav>
    );
};

export default Header;