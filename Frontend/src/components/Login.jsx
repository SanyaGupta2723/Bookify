import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🔐 LOGIN SUBMIT HANDLER
  const onSubmit = async (data) => {
    try {
      // 1️⃣ Backend login API call
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      // 2️⃣ Token save in localStorage
      localStorage.setItem("token", res.data.token);
      window.location.reload();


      // 3️⃣ Success message
      alert("Login successful");
      

      // 4️⃣ Modal close
      document.getElementById("my_modal_5").close();

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md">

        <h3 className="font-bold text-xl mb-1">Login</h3>
        <p className="text-sm opacity-70 mb-8">
          Welcome back! Please login to your account.
        </p>

        {/* ✅ FORM START */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* EMAIL */}
          <div className="form-control w-full mb-6">
            <label className="label mb-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error text-sm mt-1">
                Email is required
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="form-control w-full mb-8">
            <label className="label mb-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-error text-sm mt-1">
                Password is required
              </span>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-5">

            {/* CANCEL */}
            <button
              type="button"
              onClick={() =>
                document.getElementById("my_modal_5").close()
              }
              className="btn bg-transparent border-2 border-base-content/60 px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

            {/* LOGIN */}
            <button
              type="submit"
              className="btn bg-transparent border-2 border-base-content/60 px-6 py-3 rounded-lg"
            >
              Login
            </button>

          </div>
        </form>
        {/* ✅ FORM END */}

        <div className="divider my-6 text-sm opacity-60">OR</div>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/Signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </dialog>
  );
}

export default Login;
