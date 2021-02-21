import React from 'react';
import Hero from '../../assets/images/bees.jpg'

const Header = ({title, company, resume}) => {
  return (
    <div className="mx-auto bg-white overflow-hidden max-w-7xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-96 w-full object-cover md:w-80" src={Hero} alt="Bees" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-2xl text-red-800 font-bold">{title}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{company}</a>
          <p className="mt-2 text-gray-500 text-justify">{resume}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
