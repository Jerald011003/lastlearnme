import React from "react"
import { useLocation } from "react-router-dom"
// import "./footer.css"

const Footer = () => {
  const location = useLocation()

  if (location.pathname.startsWith("/MoviePlaybackScreen")) {
    return null; // Don't render the footer on the movie playback screen
  }
  if (location.pathname.startsWith("/ProductScreen")) {
    return null; // Don't render the footer on the movie playback screen
  }


  return (
    <footer>
      <div className='container'>
        <div className='box'>
          <p>© 2023 LearnMe. All Rights Reserved. All videos on this platform are trademarks of, and all related images and content are the property of, LearnMe Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
        </div>
        <div className='box'>
        </div>
      </div>
    </footer>
  )
}

export default Footer