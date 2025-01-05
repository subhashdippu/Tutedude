import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const { username, password } = data;

    try {
      const response = await axios.post(
        "http://localhost:4001/api/auth/login",
        { username, password }
      );
      console.log("User logged in:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Sign In!</h3>

          {/* Username Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green text-white"
              value="Sign In"
            />
          </div>
          <Link to="/">
            <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </div>
          </Link>

          <p className="text-center my-2">
            Donot have an account?
            <Link to="/signup" className="underline text-red ml-1">
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
