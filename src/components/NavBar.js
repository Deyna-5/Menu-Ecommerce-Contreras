import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

export const NavBar = () => {
  return (
    <div className="navbar bg-green-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="bg-accent-focus"><Link to={'/'}>Inicio</Link></a></li>
            <li tabIndex="0">
              <a className="justify-between">
                Mangas
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul className="p-2">
                <li><Link to="/categoria/Seinen">Seinen</Link></li>
                <li><Link to="/categoria/Shoujo">Shoujo</Link></li>
              </ul>
            </li>
            <li><a className="bg-accent-focus">Contacto</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-gray-500"><Link to={'/'}>Nippon Store</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a><Link to={'/'}>Inicio</Link></a></li>
          <li tabIndex="0">
            <a>
              Mangas
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><Link to="/categoria/Seinen">Seinen</Link></li>
              <li><Link to="/categoria/Shoujo">Shoujo</Link></li>
            </ul>
          </li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="colums-6 mr-4">
          <CardWidget></CardWidget>
        </div>

        <div className="colums-6 ml-4">
          <a className="btn bg-emerald-500 border-emerald-500">Suscribirse</a>
        </div>
      </div>
    </div>
  )
}
