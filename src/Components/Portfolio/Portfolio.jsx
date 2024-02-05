import React, { useEffect, useState } from 'react'
import port1 from '../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'


export default function Portfolio() {

  let [clicked,setClicked]= useState(false);
  let [src,setSrc]= useState('');


  function unShowPhoto() {
    let imgBox = document.querySelector('.imgBox');
    imgBox.classList.replace('d-flex','d-none');
  }

  function showPhoto(src) {
    setClicked(true);
    setSrc(src);
    let imgBox = document.querySelector('.imgBox');
    if (imgBox != null) {
      imgBox.classList.replace('d-none','d-flex');
    imgBox.firstElementChild.addEventListener('click', function (e) {
        e.stopPropagation();
      })
    }
  }

  return <>
   <div className="portfolio d-flex justify-content-center mb-3">
        <div className="content text-center container">
            <h2 className='mt-5'>PORTFOLIO COMPONENT</h2>
            <div className="hrz-line d-flex justify-content-center align-items-center my-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star me-3"></i>
                <div className="line"></div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative" onClick={() => {showPhoto(port1)}} >
                  <img src={port1} alt="" className=' w-100 rounded-3' />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative" onClick={() => {showPhoto(port2)}}  >
                  <img src={port2} alt="" className=' w-100 rounded-3' />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative" onClick={() => {showPhoto(port3)}} >
                  <img src={port3} alt="" className=' w-100 rounded-3' />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative "  onClick={() => {showPhoto(port1)}}>
                  <img src={port1} alt="" className=' w-100 rounded-3' />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative" onClick={ () => {showPhoto(port2)}} >
                  <img src={port2} alt="" className=' w-100 rounded-3' />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="content position-relative" onClick={() => {showPhoto(port3)}}>
                  <img src={port3} alt="" className=' w-100 rounded-3'  />
                  <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
        </div>

    </div>

    {clicked == true ? <div className="imgBox position-fixed top-0  bg-primary bg-opacity-25 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center" onClick={unShowPhoto}>
              <div className="img">
                <img src={src} alt="" width={600} />
              </div>
            </div> :''}
  
  </>
}
