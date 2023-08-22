

import Link from 'next/link';
import './navbar.css'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
      <nav className="navbar-items">
        <div className="navbar-left">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/listofrecipes">All Recipes</Link>
          <Link href="/community">Community</Link>
          <Link href="/help">Help</Link>
        </div>
        <div className="navbar-right">
        <a href="https://twitter.com/your_twitter_username">
        <FaTwitter size={20} />
      </a>
      <a href="https://www.instagram.com/your_instagram_username">
        <FaInstagram size={20} />
      </a>
      <a href="https://github.com/your_github_username">
        <FaGithub size={20} />
      </a>
          <Link href="/create" className="upload-button">Upload Recipe</Link>
          <div className="profile-picture">
            <a href="link_to_your_image">
            <div className="circle"></div>
            </a>
        </div>
        </div>
        
      </nav>
      
    );
  }