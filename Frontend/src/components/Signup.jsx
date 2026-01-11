import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">

        <h3 className="font-bold text-2xl mb-1">Sign up</h3>
        <p className="text-sm opacity-70 mb-8">
          Create your account.
        </p>

        {/* NAME */}
        <div className="form-control w-full mb-6">
          <label className="label mb-1">
            <span className="label-text text-sm">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="
              w-full
              bg-transparent
              border-2
              border-white
              rounded-lg
              px-3 py-2
              focus:outline-none
              focus:border-white
            "
          />
        </div>

        {/* EMAIL */}
        <div className="form-control w-full mb-6">
          <label className="label mb-1">
            <span className="label-text text-sm">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              bg-transparent
              border-2
              border-white
              rounded-lg
              px-3 py-2
              focus:outline-none
              focus:border-white
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="form-control w-full mb-8">
          <label className="label mb-1">
            <span className="label-text text-sm">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="
              w-full
              bg-transparent
              border-2
              border-white
              rounded-lg
              px-3 py-2
              focus:outline-none
              focus:border-white
            "
          />
        </div>

        {/* BUTTON */}
        <button
          className="
            w-full
            bg-transparent
            border-2
            border-white
            text-white
            py-2.5
            rounded-lg
            hover:bg-white hover:text-black
            transition
            mb-4
          "
        >
          Create Account
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() =>
              document.getElementById("login_modal")?.showModal()
            }
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
