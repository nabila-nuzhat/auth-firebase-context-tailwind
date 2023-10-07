import React, { useCallback, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>Home Page for : {user && <span> {user.displayName} </span>}  </h1>
        </div>
    );
};

export default Home;