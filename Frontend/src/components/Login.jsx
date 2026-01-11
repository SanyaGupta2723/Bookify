import React from "react";


function Login() {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md">

        {/* HEADER */}
        <h3 className="font-bold text-xl mb-1">Login</h3>
        <p className="text-sm opacity-70 mb-8">
          Welcome back! Please login to your account.
        </p>

        {/* EMAIL */}
        <div className="form-control w-full mb-6">
          <label className="label mb-3">
            <span className="label-text text-sm">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </div>

        {/* PASSWORD */}
        <div className="form-control w-full mb-8">
          <label className="label mb-3">
            <span className="label-text text-sm">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="modal-action mt-2 gap-5">
          <form method="dialog">
           <button
  className="
  btn
  bg-transparent
  border-2 border-base-content/60
  text-base-content
  px-6 py-3
  min-w-[110px]
  rounded-lg
  hover:bg-base-200
  transition"
>
  Cancel
</button>

          </form>

         <button
  className="
 btn
  bg-transparent
  border-2 border-base-content/60
  text-base-content
  px-6 py-3
  min-w-[110px]
  rounded-lg
  hover:bg-base-200
  transition"
>
  Login
</button>

        </div>

        {/* DIVIDER */}
        <div className="divider my-6 text-sm opacity-60">OR</div>

        {/* SIGNUP LINK */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link 
          to="/Signup"
           className="text-primary cursor-pointer hover:underline">
            Sign up
          </Link>{" "}
        </p>

      </div>
    </dialog>
  );
}

export default Login;
