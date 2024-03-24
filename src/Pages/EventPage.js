import React from 'react'
import './EventPage.css'

export default function EventPage() {
  return (
    <div>

      <div className='EventPagemain'>

        <div className="header">
          <h1>Landing page template.</h1>
          <p>Earth day</p>
        </div>

        <div className="container">
          <img src="https://via.placeholder.com/800x400" alt=" Enactus Image" style={{width: '100%'}}/>
            <div className="overlay">
              <h1>Enactus gnosis</h1>
            </div>

            <div className="extra-content">
              <h1>Upcoming Events</h1>
            </div>

            <div className="card-container">
              <div className="card">
                <img className="card-image" src="https://via.placeholder.com/300x200" alt="img 1"/>
                  <div className="card-content">
                    <h2 className="card-title">Table cablemountain </h2>
                    <button className="styled-button">Travel</button>
                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
              </div>

              <div className="card">
                <img className="card-image" src="https://via.placeholder.com/300x200" alt="img2"/>
                  <div className="card-content">
                    <h2 className="card-title">Xtra technology</h2>
                    <button className="styled-button">Tehnology</button>
                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur?</p>
                  </div>
              </div>

              <div className="card">
                <img className="card-image" src="https://via.placeholder.com/300x200" alt="Img 3"/>
                  <div className="card-content">
                    <h2 className="card-title">Soccer cup finail</h2>
                    <button className="styled-button">Sports</button>

                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing..</p>
                  </div>
              </div>
            </div>

          


        
        

          <div className="image-container">
            <img className="card-image" src="https://via.placeholder.com/300x200" alt="img 1"/>
              <div className="overlay">
                <h1>Enactus gnosis</h1>
              </div>
              <img className="card-image" src="https://via.placeholder.com/300x200" alt="img 1"/>
                <img className="card-image" src="https://via.placeholder.com/300x200" alt="img 1"/>
                </div>

                <div className="image-container">
                  <img className="card-image" src="https://via.placeholder.com/500x300" alt="img 1"/>
                    <img className="card-image" src="https://via.placeholder.com/500x300" alt="img 1"/>
                      <img className="card-image" src="https://via.placeholder.com/500x300" alt="img 1"/>
                      </div>

                      <div className="extra-content">
                        <footer>
                          <p>&copy;Lorem ipsum dolor sit amet..</p>
                        </footer>
                      </div>

                </div>
              </div>
          </div>
                      )
}
