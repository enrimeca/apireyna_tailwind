import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png'

const Nav = ({options, color}) => {
  const [hidden, setHidden] = useState(true);
  const show = hidden? 'hidden' : '';

  const toggleMenu = (event) => {
    event.preventDefault();
    setHidden(!hidden);
  }

  return (
    <nav className={`bg-${color}-600`} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="h-16" src={Logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 space-x-6">
                {options?.map((item, index) => <a key={index} href="#" className="item-menu">{item}</a>)}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="collapse-btn" onClick={toggleMenu}>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
      </div>

      <div className={`md:hidden ${show}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {options?.map((item, index) => <a key={index} href="#" className="item-menu block">{item}</a>)}
        </div>
      </div>
    </nav>
  )
}

export default Nav
