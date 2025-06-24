import React, { useState } from 'react'
import ProductList from './ProductList'
import ProductsGrid from './ProductsGrid'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'

const ProductContainer = () => {
  const {meta}=useLoaderData()
  const totalProducts=meta.pagination.total
  const [layut,setLayut]=useState('grid')
  const setActiveStyles=(pattern)=>{
    return `text-xl btn btn-static btn-sm ${pattern===layut?'btn-primary text-primary-content':'btn-ghost text-ghost text-based-content'}`
  }

  return (
    <>
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
      <h4>{totalProducts} product{totalProducts>1&&"s"}</h4>
      <div className="flex gap-2">
      <button type='button' onClick={()=>setLayut('grid')} className={setActiveStyles('grid')}>
        <BsFillGridFill/>
      </button>
      <button type='button' onClick={()=>setLayut('list')} className={setActiveStyles('list')}>
        <BsList/>
      </button>
      </div>

    </div>
    <div>
    {
  totalProducts === 0 ? (
    <h5>Sorry, no products matched you search</h5>
  ) : (
        layut==='grid'?<ProductsGrid/>:<ProductList/>
  )
    }
    </div>
    </>
  )
}

export default ProductContainer