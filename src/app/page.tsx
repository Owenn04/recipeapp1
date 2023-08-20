import './home.css'
import Navbar from './components/navbar'
{/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
//This is the home page

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main-section">
        <div className="title-bar">
          {/* Title content goes here */}
        </div>
        <div className="secondary-navbar">
          {/* Secondary navbar content goes here */}
        </div>
        <div className="content-wrapper">
          <div className="left-section">
            {/* Left section content goes here */}
            <p>left</p>
          </div>
          <div className="right-section">
            {/* Right section content goes here */}
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
}
    

