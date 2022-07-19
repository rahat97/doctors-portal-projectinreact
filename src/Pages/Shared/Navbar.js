import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
        {
          user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button  class="btn btn-ghost"  onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div  class="navbar bg-base-100">
            <div  class="navbar-start">
                <div  class="dropdown">
                    <label tabIndex="0"  class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0"  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div>
                <a  class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
            </div>
            <div  class="navbar-center hidden lg:flex">
                <ul  class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div  class='navbar-end'>
  <label tabIndex="1" for=" dashboard-sidebar"  class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>

        </div>
    );
};

export default Navbar;

