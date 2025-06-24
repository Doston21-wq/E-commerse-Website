import React, { useState } from 'react'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'
export const loader=async ({params})=>{
  const response=await customFetch(`/products/${params.id}`)
  return {product:response.data.data}
}
const SingleProduct = () => {
  const {product}=useLoaderData()
  const {image,title,company,price,description,colors}=product.attributes
  const [productColor,setProductColor]=useState(colors[0])
  const [amount,setAmount]=useState(0)
  const dollars=formatPrice(price)
  const handleAmount=(e)=>{
    setAmount(parseInt(e.target.value))
  }
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
    <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full'/>
    <div>
      <h1 className='capitalize text-3xl font-bold'>{title}</h1>
      <h3 className='text-xl text-neutral-content font-bold mt-2'>{company}</h3>
      <p className='text-xl mt-3'>{dollars}</p>
      <p className=' leading-8 mt-3'>{description}</p>
      <div className="mt-6">
        <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
        {
          colors.map(color=>(
            <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color===productColor && 'border-2 border-secondary'} cursor-pointer`} style={{backgroundColor:color}} onClick={()=>setProductColor(color)}>

            </button>
          ))
        }
      </div>
      <div className='form-control w-full max-w-xs mt-6'>
        <label htmlFor="amount" className='label mb-2'>
          <h4 className='capitalize tracking-wider font-medium text-md'>amount</h4>
        </label>
        <select name="amount" id="amount" className='select select-secondary select-bordered select-md' value={amount} onChange={handleAmount}> {generateAmountOptions(20)}</select>
      </div>
      <div className="mt-10">
        <button className='btn btn-secondary btn-md'>Add to bag</button>
      </div>
    </div>
      </div>
    </section>
  )
}

export default SingleProduct