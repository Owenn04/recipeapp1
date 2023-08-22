"use client"

import { useState } from "react";


import './home.css'
import Navbar from './components/navbar'
import SecondaryNavbar from './components/secondarynavbar'
import RightSide from './components/rightside'
import Feed from './components/feed'

const dummyData = [
  {
    image: 'https://www.holidify.com/images/cmsuploads/compressed/shoyu-ramen_20181227133143.jpg',
    title: 'Article 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vestibulum nulla.',
    recipe: "",
  },
  {
    image: 'https://www.feastingathome.com/wp-content/uploads/2022/08/Grilled-Salmon-9.jpg',
    title: 'Article 2',
    description: 'Vestibulum ultrices justo eget elit facilisis, id venenatis ante dictum.',
    recipe: "",
  },
  // Add more dummy objects here
];

export default function Home() {

  const [selectedTab, setSelectedTab] = useState('all')

  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main-section">
        <div className="title-bar">
          <h1>Dash Board</h1>
        </div>
        <div className="secondary-navbar">
        <SecondaryNavbar
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
          />
        </div>
        <div className="content-wrapper">
          <div className="left-section">

          {selectedTab === 'all' && 
          <div>
            <Feed items={dummyData} />
          </div>}

          {selectedTab === 'you' && 
          <div>
            <p>You</p>
          </div>}

          {selectedTab === 'liked' && 
          <div>
            <p>Liked</p>
          </div>}

        </div>
          <div className="right-section">
            <RightSide/>
          </div>
        </div>
      </div>
    </div>
  );
}
    

