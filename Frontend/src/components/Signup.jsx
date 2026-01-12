import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("SIGNUP DATA:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">

        <h3 className="font-bold text-2xl mb-1">Sign up</h3>
        <p className="text-sm opacity-70 mb-8">
          Create your account.
        </p>

        {/* ✅ FORM START */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* NAME */}
          <div className="form-control w-full mb-6">
            <label className="label mb-2">
              <span className="label-text text-sm">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="
  w-full
  bg-transparent
  border-2
  border-white
  rounded-lg
  px-3 py-2
  text-white
  placeholder-white/60
  focus:outline-none
  focus:border-white
"

              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-error text-sm mt-1">
                This field is required
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="form-control w-full mb-6">
            <label className="label mb-2">
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
  text-white
  placeholder-white/60
  focus:outline-none
  focus:border-white
"

              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error text-sm mt-1">
                This field is required
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="form-control w-full mb-6">
            <label className="label mb-2">
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
  text-white
  placeholder-white/60
  focus:outline-none
  focus:border-white
"

              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-error text-sm mt-1">
                This field is required
              </span>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full btn btn-outline mb-4"
          >
            Create Account
          </button>

        </form>
        {/* ✅ FORM END */}

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/"
            state={{ openLogin: true }}
            className="text-primary hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
