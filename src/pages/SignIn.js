import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-lg">Please Login!</h3>

        {/* Email Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>

        {/* Password Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover mt-2">
              Forgot password?
            </a>
          </label>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <div className="form-control mt-4">
          <input
            type="submit"
            className="btn bg-green text-white"
            value="Login"
          />
        </div>

        {/* Close Button */}
        <Link to="/">
          <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </div>
        </Link>

        {/* Signup Link */}
        <p className="text-center my-2">
          Don’t have an account?
          <Link to="/signup" className="underline text-red ml-1">
            Signup Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
