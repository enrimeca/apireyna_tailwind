import React from 'react';
import Logo from '../../assets/images/logo.png'

const Nav = ({options, color}) => {
  return (
    <nav className={`bg-${color}-600`} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="h-16" src={Logo} alt="Workflow" />
            </div>
            <div className="ml-10 space-x-6">
              {options?.map((item, index) => <a key={index} href="#" className="item-menu">{item}</a> 
              )}
            </div>
          </div>          
      </div>
    </nav>
  )
}

export default Nav
