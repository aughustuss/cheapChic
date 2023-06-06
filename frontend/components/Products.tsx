import ProductContext from '@/contexts/Product'
import { ProductTypes } from '@/typings'
import React, { useContext } from 'react'

const Products = () => {
    const {products} = useContext(ProductContext);
  return (
    <div>Products</div>
  )
}

export default Products