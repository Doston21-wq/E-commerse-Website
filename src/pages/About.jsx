import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt ex mollitia eveniet ipsam odio. Cupiditate totam hic quos sapiente culpa minima tempore, rem numquam corrupti impedit, odit sed, explicabo autem officiis doloremque molestias? Aliquam voluptate consequuntur, minima reiciendis pariatur, repellendus porro soluta, laboriosam sint incidunt natus quia sed eum.</p>
    </>
  )
}

export default About