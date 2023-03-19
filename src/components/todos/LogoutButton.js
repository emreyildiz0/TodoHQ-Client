import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

const Logout = () => {
    const {handleLogout} = useContext(AuthContext);

    return (
        <div
            className="logout logout"
            onClick={handleLogout}
        >
            Logout
        </div>
    );
};

export default Logout;
