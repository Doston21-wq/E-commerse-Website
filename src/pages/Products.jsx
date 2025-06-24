import React from 'react'
import Filter from '../components/Filter'
import ProductContainer from '../components/ProductContainer'
import PaginationContainer from '../components/PaginationContainer'
import { customFetch } from '../utils'
const url='/products'
export const loader=async ()=>{
  const response=await customFetch(url)
  const products=response.data.data
  const meta=response.data.meta
  return {products,meta}
}
const Products = () => {
  return (
    <>
      <Filter/>
      <ProductContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products