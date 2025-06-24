import { Link } from "react-router-dom"
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const Hero = () => {
    const carouselImage=[hero1,hero2,hero3,hero4]
  return (
    <div className="grid lg:grid-cols-2 gap-x-24 items-center">
        <div >
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
            <p className="max-w-xl text-lg mt-8 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum consectetur quis voluptates laudantium fugit illo deleniti corporis nisi reprehenderit?</p>
            <div className="mt-10">
                <Link to={'/cart'} className="btn btn-primary uppercase">our products</Link>
            </div>
        
        </div>
            <div className="hidden h-[28rem] lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                {
                    carouselImage.map(image=>(
                        <div key={image} className="carousel-item">
                            <img src={image}  className="rounded-box h-full w-80 object-cover"/>
                        </div>
                    ))
                }
            </div>

    </div>
  )
}

export default Hero