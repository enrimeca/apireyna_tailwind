import React from 'react';
import Product from '../../elements/ProductCard/index'

const Main = ({products}) => {
  return (
    <div className="mx-auto bg-yellow-100 overflow-hidden max-w-7xl">
      <div>
        <div className="uppercase tracking-wide text-2xl text-red-800 font-bold mt-16 mb-8 text-center">Productos</div>
        <div className="flex flex-wrap items-center">
          {products.map((e, index) => (
            <div key={index}>
              <Product name={e.name} image={e.image} description={e.description} />
            </div>
          ))}
        </div>        
      </div>
      <div>
        <div className="uppercase tracking-wide text-2xl text-red-800 font-bold my-16 text-center">Contacto</div>
      </div>       
    </div>
  )
}

export default Main
