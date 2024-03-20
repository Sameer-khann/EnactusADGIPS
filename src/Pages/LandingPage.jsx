import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';



import "./LandingPage.css";
import prev1 from "../img/pastproject1.png";
import prev2 from "../img/pastproject2.jpg";
import prev3 from "../img/pastproject3.jpg";
import prev4 from "../img/pastproject4.jpg";
import prev5 from "../img/pastproject5.jpg";
import mainlogo from "../img/encatus.png";

import council1 from "../img/council1.jpg";
import council2 from "../img/council2.jpg";
import council3 from "../img/council3.png";
import council4 from "../img/council4.jpg";

import head1 from "../img/head1.jpg";
import head2 from "../img/head2.jpg";
import head3 from "../img/head3.jpg";
import head4 from "../img/head4.jpg";
import head5 from "../img/head5.jpg";

import ongoing1 from "../img/ongoing1.png";
import ongoing2 from "../img/ongoing2.png";
import ongoing3 from "../img/ongoing3.jpg";

import ImageCarousel from "../Components/ImageCarousel";
import Teams from "../Components/Teams";

export default function LandingPage({ link1 }) {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      // Use toast.error to show an error message
      toast.error("Please fill in all the fields", { position: "top-center" });
      return;
    }

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
    const serviceID = 'service_2uzc75j';
    const templateID = 'template_4r24u3k';
    const userID = 'XjcSC4PzoNt-2Mpka';


    // Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Use toast to show a success message
        toast.success("Send Successfully!", { position: "top-center" });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Use toast.error to show an error message
        toast.error("Error sending email", { position: "top-center" });
      });

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <>
      <div>
        <div className="landingpage">
          <div className="contentLandingPage">
            <h1>Enactus ADGIPS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="landingPageImg floating">
            <img src={mainlogo} alt="" />
          </div>
        </div>

        <div className=" HomeWh0WeAre mt-0 mb-0 w-full  ">
          <div className="container flex flex-col items-center justify-center  p-8  mt-0 ">
            <h1 className="text-3xl font-bold mb-4 ">Who are we?</h1>
            <ul className=" text-center mt-8">
              <li className="font-bold"><h5>ENTREPRENEURIAL</h5></li>
              <li className="mb-2">
                initiating business innovation with integrity and passion
              </li>
              <li className="font-bold"> <h5>ACTION</h5></li>
              <li className="mb-2">
                The experience of social impact that sparks social enterprise
              </li>
              <li className="font-bold"><h5>US</h5></li>
              <li className="mb-2">
                Students, academic and business leaders collaborating to create a
                better world
              </li>
            </ul>
          </div>
        </div>

        <div className="HomeCarousel bg-opacity-20 p-4">
          <ImageCarousel
            heading="On Going Projects"
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

          <Teams heading="Our Council" />

          {/* <ImageCarousel
          heading="Our Council"
          link1={council1}
          link2={council2}
          link3={council3}
          link4={council4}
        />
        <ImageCarousel heading="Our Heads and Team"
          link1={head1}
          link2={head2}
          link3={head3}
          link4={head4}
          link5={head5}

        /> */}
        </div>

        <div className="mt-24 w-2/3 min-h-72 m-auto p-4 ">
          <h1 className="font-bold text-3xl text-center">
            "Quote in favour of enactus and its goals"
          </h1>
          <p className="mt-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consectetur animi voluptatem eum provident amet, quas ratione sunt
            beatae eius nostrum eaque fugiat labore earum Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Incidunt ipsam impedit saepe
            sapiente alias illo necessitatibus reiciendis odio, repellat
            voluptatem modi quia ullam quae iure, deserunt similique ipsum? Earum
            laboriosam laudantium esse ex. Earum quod, consequatur quisquam quas
            quos natus? Velit expedita adipisci delectus voluptate in ab et soluta
            similique..
          </p>
        </div>



      </div>
      <div className="CuerySEC">
        <div className="Queary">
          <h1>query or suggestion</h1>
        </div>
        <div className="subjectSecProL">
          <h3>Any query or suggestion for us?</h3>
          <h4>Feel free to let us know below : )</h4>
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <p className="formContact">Enter your name:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Name'
                />

                <p className="formContact">Enter your e-mail:</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='E-mail'
                />

                <p className="formContact">Write your suggestion/query:</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="20" rows="4"
                  placeholder='Description'
                />

              </div>

              <div className="buttonSubmit">
                <div type="submit" className='contactbtn'>Submit</div>
              </div>

            </form>
          </div>
        </div>
      </div>

    </>

  );
}
