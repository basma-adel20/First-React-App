import React from 'react'

export default function About() {
  return <>
   <div className="about d-flex justify-content-center align-items-center text-white">
        <div className="content text-center">     
            <h2 className='mt-5'>ABOUT COMPONENT</h2>
            <div className="hrz-line d-flex justify-content-center align-items-center mt-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star me-3"></i>
                <div className="line"></div>
            </div>
          <div className="container">
            <div className="row px-5 text-start mt-3">
              <div className="col-md-6 ps-md-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6 pe-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </>
}
