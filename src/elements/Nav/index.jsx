import React from 'react';
import Logo from '../../assets/images/logo.png'

const Nav = ({options, color}) => {
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
              <button type="button" className="bg-yellow-700 inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-700 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>          
          </div>          
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {options?.map((item, index) => <a key={index} href="#" className="item-menu block">{item}</a>)} 
        </div>
      </div>
    </nav>
  )
}

export default Nav
