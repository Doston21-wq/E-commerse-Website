import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils';

const ProductList = () => {
  const {products}=useLoaderData()
  return (
    <div className="pt-12 gap-10 flex flex-col">
      {
        products.map((product)=>{
          const {image,title,price,company}=product.attributes
          const dollars=formatPrice(price)
          return  <Link to={`/products/${product.id}`} key={product.id} className='p-8 rounded-lg flex flex-col sm:flex-row flex-wrap gap-y-4 bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 group'>
            <img src={image} alt={title} className='w-24 h-24 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300' />
            <div className="ml-0 sm:ml-10">
            <h3 className='capitalize font-medium text-lg'>{title}</h3>
            <h4 className=' capitalize text-md text-gray-500'>{company}</h4>
            </div>
            <p className='font-medium ml-0 sm:ml-auto text-lg'>{dollars}</p>
          </Link>
        })
      }
    </div>
  )
}

export default ProductList