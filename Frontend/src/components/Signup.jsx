import React from "react";

function Signup() {
  return (
    <dialog id="my_modal_signup" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md">

        {/* HEADER */}
        <h3 className="font-bold text-xl mb-1">Sign up</h3>
        <p className="text-sm opacity-70 mb-8">
          Create your account to get started.
        </p>

        {/* NAME */}
        <div className="form-control w-full mb-6">
          <label className="label mb-3">
            <span className="label-text text-sm">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
        </div>

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
            placeholder="Create a password"
            className="input input-bordered w-full"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="modal-action mt-6 gap-6">
          <form method="dialog">
            <button
              className="
              btn
              bg-transparent
              border-2 border-base-content/60
              text-base-content
              px-6 py-3
              min-w-[120px]
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
            border-2 border-primary
            text-primary
            px-6 py-3
            min-w-[120px]
            rounded-lg
            hover:bg-primary hover:text-white
            transition"
          >
            Sign up
          </button>
        </div>

        {/* DIVIDER */}
        <div className="divider my-6 text-sm opacity-60">OR</div>

        {/* LOGIN LINK */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => {
              document.getElementById("my_modal_signup").close();
              document.getElementById("my_modal_5").showModal();
            }}
          >
            Login
          </span>
        </p>

      </div>
    </dialog>
  );
}

export default Signup;
