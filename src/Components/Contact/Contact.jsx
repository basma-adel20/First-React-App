import React from 'react'

export default function Contact() {
  return <>
  <div className="contact d-flex justify-content-center mb-5">
        <div className="content w-100">
            <h2 className='mt-5 text-center'>CONATCT SECTION</h2>
            <div className="hrz-line d-flex justify-content-center align-items-center mt-3">
                <div className="line me-3"></div>
                <i class="fa-solid fa-star me-3"></i>
                <div className="line"></div>
            </div>
            <form className='w-50 mx-auto mt-5 p-3'>
               <input id="userName" type="text" placeholder="userName" name="userName" class="form-control border-0 border-bottom py-3 my-4"/>
               <input id="userAge" type="text" placeholder="userAge" name="userAge" class="form-control border-0 border-bottom py-3 mb-4"/>
               <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" class="form-control border-0 border-bottom py-3 mb-4"/>
               <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" class="form-control border-0 border-bottom py-3 mb-4"/>
               <button class="btn text-white submit"> send Message </button>
            </form>
        </div>

    </div>
  
  </>
}
