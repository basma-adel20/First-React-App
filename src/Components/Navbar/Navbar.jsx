import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [activeComponent, setActiveComponent] = useState('');

  return <>
    <nav className="navbar navbar-expand-lg p-4 fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={'/'}>START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className={`nav-item  me-3 ${activeComponent === 'about' ? 'active' : ''}`} >
            <Link className="nav-link rounded-3 " to={'about'} onClick={() => setActiveComponent('about')} >ABOUT</Link>
            </li>
            <li className={`nav-item me-3 ${activeComponent === 'portfolio' ? 'active' : ''}`}>
            <Link className="nav-link rounded-3" to={'portfolio'} onClick={() => setActiveComponent('portfolio')}>PORTFOLIO</Link>
            </li>
            <li className={`nav-item ${activeComponent === 'contact' ? 'active' : ''}`}>
            <Link className="nav-link rounded-3" to={'contact'} onClick={() => setActiveComponent('contact')}>CONTACT</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  </>
}

// export default function Navbar() {
//   return <>
    
//     <nav className="navbar navbar-expand-lg p-4 fixed-top ">
//     <div className="container">
//         <a className="navbar-brand" href="#">START FRAMEWORK</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//             <a className="nav-link me-3" href="#">ABOUT</a>
//             </li>
//             <li className="nav-item">
//             <a className="nav-link me-3" href="#">PORTFOLIO</a>
//             </li>
//             <li className="nav-item">
//             <a className="nav-link" href="#">CONTACT</a>
//             </li>
//         </ul>
//         </div>
//     </div>
//     </nav>
//   </>
// }
