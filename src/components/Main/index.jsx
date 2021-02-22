import React from 'react';
import Product from '../../elements/ProductCard/index';
import ContactForm from '../../elements/ContactForm/index';

const Main = ({products}) => {
  return (
    <div className="mx-auto bg-yellow-100 overflow-hidden max-w-7xl">
      <div className="pb-12">
        <div className="section-title">Productos</div>
        <div className="flex flex-wrap items-center">
          {products.map((e, index) => (
            <div key={index}>
              <Product name={e.name} image={e.image} description={e.description} />
            </div>
          ))}
        </div>
      </div>
      <div>
          <ContactForm />
      </div>
    </div>
  )
}

export default Main
