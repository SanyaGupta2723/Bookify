import React from 'react'

function Login() {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
    
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <div>
        <span>Email </span> 
        <br />
        <input type="Email" placeholder="Enter your email" className="w-80 px-3 border border-gray-300 rounded-md" />
      </div>
      
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
