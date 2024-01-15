import React from 'react'

function Header({title}) {
  return (
    <div className="p-5 bg-primary flex">
      {/* bg-gradient-to-r from-primary to-black */}
      <h1 className="text-fifth text-1xl font-bold">{title}</h1>
    </div>
  );
}

export default Header