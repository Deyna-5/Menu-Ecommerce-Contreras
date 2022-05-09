import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-transparent px-10 grid grid-cols-4">
        <div className="px-10">
          <a className="btn btn-ghost font-bold font-serif normal-case text-xl plant-shop-logo"><Link to={'/'}>PlantShop.</Link></a>
        </div>

        <div className="col-span-2">
          <ul className="menu menu-horizontal p-0">
            <li><a className="btn btn-ghost text-slate-500"><Link to={'/'}>INICIO</Link></a></li>
            <li tabIndex="0">
              <a className="btn btn-ghost text-slate-500">
                TIENDA
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2">
                <li><Link to="/categoria/Cactus">Cactus</Link></li>
                <li><Link to="/categoria/Macetas">Macetas</Link></li>
              </ul>
            </li>
            <li><a className="btn btn-ghost text-slate-500">SOBRE NOSTROS</a></li>
            <li><a className="btn btn-ghost text-slate-500">CONTACTO</a></li>
          </ul>
        </div>
        
        <div>
          <div className="px-10 "><a className='btn btn-ghost text-slate-500'>INGRESAR</a></div>
          <div>|</div>
          <div className="px-10"><CardWidget></CardWidget></div>
        </div>
      </div>
    </>
  )
}
