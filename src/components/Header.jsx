// import React from 'react';

export default function Header() {
    return (
        <header className="top-nav">
    <div>
      Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </header>

//         <header>
//     <nav>
//         <ul>
//             <li>Lorem, ipsum.</li>
//             <li>Vitae, unde!</li>
//             <li>Quibusdam, minima!</li>
//             <li>Possimus, cumque.</li>
//         </ul>
//     </nav>
// </header>
    )
}
// Header;