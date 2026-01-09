import React from "react";

function Login() {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md">

        <h3 className="font-bold text-lg mb-1">Login</h3>
        <p className="text-sm opacity-70 mb-5">
          Press ESC key or click the button below to close
        </p>

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


        {/* ✅ ACTION BUTTONS */}
        <div className="modal-action mt-2">
          <form method="dialog">
            <button className="btn btn-outline">Cancel</button>
          </form>
          <button className="btn btn-primary">Login</button>
        </div>

      </div>
    </dialog>
  );
}

export default Login;
