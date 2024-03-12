import React from 'react'
import { Link } from 'react-router-dom'; 

import './ProAstitav.css';
import astitav from "../img/astitav.png"
import teampic from "../img/team1.png"
import shape from "../img/graph.png"
import teampic2 from "../img/team2.png"

export default function ProAstitav() {
  return (
    <>
      <div className="ProjeactAstitav">
        <div className="astitavLogo">
          <img src={astitav} alt="" />
        </div>
        <div className="headingAstitav">
          <h1>Welcome to</h1>
          <div id='headAstitav'>INITIATIVE ASTITVA</div>
        </div>
        <p className='paraAstitav'>Astitva is an initiative taken to provide a platform to empower various stakeholders highly concerned about the social evils of the society. It can help in creating a sense of awareness among individuals and organizations about current challenges faced by our society. It provides an opportunity for Enactus ADGITM itself to be involved in identification of social problems at ground level. It is an umbrella project with various sub - projects :</p>

        <div className="AstitavCards">

         
            <div className="cardAsti">
              <h1>GUTARGU</h1>
              <p>Gutargu is a social awareness publication which enlightens the reader about the uprising social stigmas and initiatives taken by the government and individuals to encounter them.</p>
              <Link to="/gutargun">
              <span>check it out &rarr;</span>
              </Link>
            </div>
         

          <div className="cardAsti">
            <h1>DARPAN</h1>
            <p>Gutargu is a social awareness publication which enlightens the reader about the uprising social stigmas and initiatives taken by the government and individuals to encounter them.</p>
            <Link to="https://darpan.enactusadgitm.in/" target='blanck'>
            <span>check it out &rarr;</span>
            </Link>
          </div>
          <div className="cardAsti">
            <h1>DHAIRYAM</h1>
            <p>Gutargu is a social awareness publication which enlightens the reader about the uprising social stigmas and initiatives taken by the government and individuals to encounter them.</p>
            <Link to="/gutargun">
            <span>check it out &rarr;</span>
            </Link>
          </div>
        </div>



      </div>
      <div className="curve"></div>
      <div className="teamAstitav">
        <div className="teamMemberAstitav">
          <h4>Project Heads</h4>
          <h1>PILLARS OF ASTITVA</h1>
        </div>
        <div className="teamDiscription">
          <div className="imgSectionOFTeam">
            <img src={teampic} alt="" />
          </div>
          <div className="dis">
            <h1>Paridhi Sharma</h1>
            <p>B tech ( CSE ) 2020-2024</p>
          </div>
        </div>
        <div className="teamDiscription">
          <div className="imgSectionOFTeam">
            <img src={teampic2} alt="" />
          </div>
          <div className="dis">
            <h1>Ishika Khuranas</h1>
            <p>B tech ( IT ) 2020-2024</p>
          </div>
        </div>
      </div>
      <div className="endcurve"></div>



    </>
  )
}
