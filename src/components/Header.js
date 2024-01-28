import React from 'react'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className="w-44" src={require("../assets/Netflix_Logo_PMS.png")} alt="Logo" />
    </div>
  );
}

export default Header