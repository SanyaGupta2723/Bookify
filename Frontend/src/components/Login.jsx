import React from "react";

function Login() {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md mb-8">

        <h3 className="font-bold text-lg mb-8">Login</h3>
        

        {/* ✅ FORM FIELD */}
        <div className="form-control w-full mb-8">
  <label className="label mb-4">
    <span className="label-text text-sm">Email</span>
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="input input-bordered w-full"
  />
</div>
<div className="form-control w-full mb-8">
  <label className="label mb-4">
    <span className="label-text text-sm">Password</span>
  </label>
  <input
    type="password"
    placeholder="Enter your password"
    className="input input-bordered w-full"
  />
</div>

        {/* ✅ ACTION BUTTONS */}
        <div className="modal-action mt-5 gap-6">
          <form method="dialog">
            <button className="btn btn-outline">Cancel</button>
          </form>
          <button
  className="
  btn
  bg-transparent
  border-2 border-primary

  transition"
>
  Login
</button>
        </div>

      </div>
    </dialog>
  );
}

export default Login;
