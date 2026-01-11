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

        <input className="input input-bordered w-full mb-4" placeholder="Name" />
        <input className="input input-bordered w-full mb-4" placeholder="Email" />
        <input className="input input-bordered w-full mb-6" placeholder="Password" />

        <button className="btn btn-primary w-full mb-4">
          Create Account
        </button>

        {/* 👇 Login = modal open */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() =>
              document.getElementById("login_modal").showModal()
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
