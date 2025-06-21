import {Link} from 'react-router-dom'
import hero1 from '../assets/Hero1.webp'
import hero2 from '../assets/Hero2.webp'
import hero3 from '../assets/Hero3.webp'
import hero4 from '../assets/Hero4.webp'
const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop</h1>
         <p className='max-w-xl text-lg mt-8 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, excepturi amet. Laborum error ratione recusandae similique!</p>
        <div className='mt-10'>
<Link to={'/products'} className='btn btn-primary uppercase'>our products</Link>
        </div>
        </div>
    <div className='hidden h-[28rem] lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4'>
{
    carouselImages.map((image)=>{
        return <div key={image} className='carousel-item'>
<img src={image} alt="this is image" className='rounded-box h-full w-80 object-cover'/>
        </div>
    }
    )
}
    </div>
    </div>
  )
}

export default Hero