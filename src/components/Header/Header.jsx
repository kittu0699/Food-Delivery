import React from 'react'
import './Header.css'
const Header = () => {

   const handleViewMenu = () => {
    const section = document.getElementById("explore-menu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
         <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
         <button onClick={handleViewMenu}>View Menu</button>
    </div>
    </div>
  )
}

export default Header