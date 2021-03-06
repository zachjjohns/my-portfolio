import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to='/' 
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-8 px-3 mr-4 text-blue-300 hover:text-blue-500 text-4xl font-bold cursive tracking-widest"
          >
            Zach Johnson
          </NavLink>
          <NavLink 
            to='/post'
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-300 hover:text-blue-500"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to='/project'
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-300 hover:text-blue-500"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            Projects
          </NavLink>
          <NavLink 
            to='/about'
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-300 hover:text-blue-500"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/zachjjohns/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
          <SocialIcon url="https://github.com/zachjjohns" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}