import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">W-Buddy</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>SignUp</a>
            </li>
            <li>
            <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
