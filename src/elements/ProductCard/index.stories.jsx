import React from 'react';
import ProductCard from './index'
import data from '../../data/products.json'

export default {
  title: 'Element/ProductCard',
  component: ProductCard
};

const Template = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Miel',
  image: '/images/miel.jpg',
  description: 'La miel es una excelente fuente de energía, pues contiene azúcares sencillos (glucosa y fructosa) utilizables rápidamente por el organismo.'
};

