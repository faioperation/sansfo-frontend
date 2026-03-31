import React from 'react';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div>
            <header className='sticky top-0'>
                    <div className="h-18 bg-white"></div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;