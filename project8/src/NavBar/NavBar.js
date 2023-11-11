import React from 'react'

const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <a href="#" className='navbar-brand'>Bootstrap</a>
    <div className='ml-auto'>
        <ul className='nav bg-dark'>
            <li><a href="#" className='nav-link text-warning nav-item'>Home</a></li>
            <li><a href="#" className='nav-link text-warning nav-item'>Details</a></li>
            <li><a href="#" className='nav-link text-warning nav-item'>Employees</a></li>
            <li><a href="#" className='nav-link text-warning nav-item'>About</a></li>
            <li><a href="#" className='nav-link text-warning nav-item nav-tab'>Login</a></li>
        </ul>
    </div>
  </nav>
}

export default Navbar