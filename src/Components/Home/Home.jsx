import React from 'react'
import avatar from '../../assets/images/avataaars.svg'

export default function Home() {
  return <>
    <div className="home d-flex justify-content-center align-items-center text-white">
        <div className="content text-center">
            <img src={avatar} width={250} alt=""/>      
            <h2 className='mt-5'>START FRAMEWORK</h2>
            <div className="hrz-line d-flex justify-content-center align-items-center mt-3">
                <div className="line me-3"></div>
                <i class="fa-solid fa-star me-3"></i>
                <div className="line"></div>
            </div>
            <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  
  </>
}
