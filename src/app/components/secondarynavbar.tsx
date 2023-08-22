"use client"
import './secondarynavbar.css'

export default function SecondaryNavbar({ selectedTab, onSelectTab }: any) {


  return (
    <div className="secondary-navbar">
      <button
        className={selectedTab === 'all' ? 'active' : ''}
        onClick={() => onSelectTab('all')}
      >
        All
      </button>
      <button
        className={selectedTab === 'you' ? 'active' : ''}
        onClick={() => onSelectTab('you')}
      >
        You
      </button>
      <button
        className={selectedTab === 'liked' ? 'active' : ''}
        onClick={() => onSelectTab('liked')}
      >
        Liked
      </button>
    </div>
  );
}
