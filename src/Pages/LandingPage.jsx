import React from "react";
import prev1 from "../img/pastproject1.png";
import prev2 from "../img/pastproject2.jpg";
import prev3 from "../img/pastproject3.jpg";
import prev4 from "../img/pastproject4.jpg";
import prev5 from "../img/pastproject5.jpg";
import mainlogo from "../img/main-logo3.png";


import ongoing1 from "../img/ongoing1.png";
import ongoing2 from "../img/ongoing2.png";
import ongoing3 from "../img/ongoing3.jpg";

import ImageCarousel from "../Components/ImageCarousel";
// import Team from "../Components/Teams"
import Teams from "../Components/Teams";

export default function LandingPage({ link1 }) {
  return (
    <div>
      <div className="flex  gap-0 w-100 h-96  mt-0">
        {/* Left Side */}
        <div className="w-1/2  flex justify-center bg-yellow-100 items-center">
          {/* Text content */}
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Enactus ADGIPS</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="w-1/2 flex justify-center bg-green-300 items-center">
          <div className="p-4 flex justify-center items-center">
            <img src={mainlogo} alt="Placeholder" className="w-96 h-96" />
          </div>
        </div>
      </div>

      <div className="mt-0 mb-0 w-full bg-green-500 rounded-lg">
        <div className="container flex flex-col items-center justify-center  p-8  mt-8 ">
          <h1 className="text-3xl font-bold mb-4 ">Who are we?</h1>
          <ul className=" text-center mt-8">
            <li className="font-bold">ENTREPRENEURIAL</li>
            <li className="mb-2">
              initiating business innovation with integrity and passion
            </li>
            <li className="font-bold"> ACTION</li>
            <li className="mb-2">
              The experience of social impact that sparks social enterprise
            </li>
            <li className="font-bold">US</li>
            <li className="mb-2">
              Students, academic and business leaders collaborating to create a
              better world
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black bg-opacity-40 p-4">
        <ImageCarousel heading="On Going Projects" 
           link1={ongoing1}
           link2={ongoing3}
           link3={ongoing2}
        />
        <ImageCarousel
          heading="Our Previous Projects"
          link1={prev1}
          link2={prev2}
          link3={prev3}
          link4={prev4}
          link5={prev5}
        />
  
        <Teams 
        heading="Our Council"
        />
      
      </div>

      <div className="mt-24 w-2/3 min-h-72 m-auto p-4 ">
        <h1 className="font-bold text-3xl text-center">
          "Quote in favour of enactus and its goals"
        </h1>
        <p className="mt-10 text-center" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consectetur animi voluptatem eum provident amet, quas ratione sunt
          beatae eius nostrum eaque fugiat labore earum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam impedit saepe sapiente alias illo necessitatibus reiciendis odio, repellat voluptatem modi quia ullam quae iure, deserunt similique ipsum? Earum laboriosam laudantium esse ex. Earum quod, consequatur quisquam quas quos natus? Velit expedita adipisci delectus voluptate in ab et soluta similique..
        </p>
      </div>

    </div>
  );
}
