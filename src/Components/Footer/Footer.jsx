import React from 'react'

export default function Footer() {
  return <>
    <section >
    <div className="footer-text">
        <div className="p-40">
            <div className="row m-4 text-white text-center">
                <div className="col-md-4 p-3 ">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 p-3 ">
                    <h3>AROUND THE WEB</h3>
                    <ul className='d-flex justify-content-center'>
                        <li className='me-2'> <i className='fa fa-brands fa-facebook'></i> </li>
                        <li className='me-2'> <i className='fa fa-brands fa-twitter'></i> </li>
                        <li className='me-2'> <i className='fa fa-brands fa-linkedin-in '></i> </li>
                        <li> <i className='fas fa-globe'></i> </li>
                    </ul>
                </div>
                <div className="col-md-4 p-3 ">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright p-4">
        <p className='text-center text-white mb-0'>Copyright © Your Website 2021</p>
    </div>
    </section>
  </>
}
