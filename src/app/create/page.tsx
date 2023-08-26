"use client"

import { useState } from "react";


import '../home.css'
import Navbar from '../components/navbar'
import SecondaryNavbar from '../components/secondarynavbar'
import RightSide from '../components/rightside'
import RecipeForm from '../components/recipeform'

export default function Create() {

  const [selectedTab, setSelectedTab] = useState('all')

  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main-section">
        <div className="title-bar">
          <h1>Create</h1>
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
            <RecipeForm/>
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
    

