import React from 'react';
import Logo from '../assets/images/logo.png'

const Nav = () => {
  return (
    <nav className="bg-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="h-16" src={Logo} alt="Workflow" />
            </div>
            <div className="ml-10 space-x-6">
              <a href="#" className="text-lg text-white hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>

              <a href="#" className="text-lg text-white hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Empresa</a>

              <a href="#" className="text-lg text-white hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Productos</a>

              <a href="#" className="text-lg text-white hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>          
      </div>
    </nav>
  )
}

export default Nav
