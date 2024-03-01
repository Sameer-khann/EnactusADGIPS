import React from 'react'
import ImageCarousel from "../Components/ImageCarousel"
import ImageCarouselType2 from "../Components/ImageCarouselType2"

export default function LandingPage() {
  return (
    <div  >
     <div className="flex  gap-4 w-100 h-96  mt-8">
      {/* Left Side */}
      <div className="w-1/2  flex justify-center bg-yellow-200 items-center">
        {/* Text content */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Enactus ADGIPS</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

    
      <div className="w-1/2 flex justify-center bg-green-200 items-center">
     
        <div className="p-4 flex justify-center items-center">
          <img src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" className="w-64 h-64" />
        </div>
      </div>
    </div>


    <div className="mt-8 mb-8 w-full bg-green-500 rounded-lg">
    <div className="container flex flex-col items-center justify-center  p-8  mt-8 ">
  <h1 className="text-4xl font-bold mb-4 ">Who are we?</h1>
  <ul className=" text-center mt-8">
    <li className='font-bold' >ENTREPRENEURIAL</li>
    <li className='mb-2' >initiating business innovation with integrity and passion</li>
    <li className='font-bold' > ACTION</li>
    <li className='mb-2' >The experience of social impact that sparks social enterprise</li>
    <li className='font-bold'  >US</li>
    <li className='mb-2' >Students, academic and business leaders collaborating to create a better world</li>
  </ul>
</div>
</div>

<div  className='bg-black bg-opacity-40 p-4'  >


<ImageCarousel heading="On Going Projects"  />
<ImageCarousel heading="Our Previous Projects" />
<ImageCarousel heading="Our Council" />
<ImageCarousel heading="Our Heads and Team" />
</div>

<div className='mt-24 w-1/2 min-h-72 m-auto bg-yellow-500 p-4 ' >
  <h1 className='font-bold text-2xl' >Quote in favour of enactus and its goals</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur animi voluptatem eum provident amet, quas ratione sunt beatae eius nostrum eaque fugiat labore earum.</p>
</div>
<div className='flex m-16' >
  <div className='w-1/2 mr-4' >
    <ImageCarouselType2 />
  </div>
  <div className='w-1/2' >
  <h1 className='font-bold text-2xl' >Quote in favour of enactus and its goals</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur animi voluptatem eum provident amet, quas ratione sunt beatae eius nostrum eaque fugiat labore earum.</p>
  </div>
</div>

    </div>
  )
}
