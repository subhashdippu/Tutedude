import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/api/auth/register",
        data
      );
      console.log("User signed up:", response.data);
      navigate(from, { replace: true });
    } catch (error) {
      if (error.response) {
        console.error("Error signing up:", error.response.data);
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  };

  const handleRegister = () => {
    console.log("Social login initiated");
    navigate("/");
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Create An Account!</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Your username"
              className="input input-bordered"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Username is required
              </p>
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
              <p className="text-red-500 text-xs italic">
                Password is required
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-2">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green text-white"
              value="Sign up"
            />
          </div>

          {/* Login Link */}
          <div className="text-center my-2">
            Already have an account?
            <Link to="/signin">
              <button className="ml-2 underline">Login here</button>
            </Link>
          </div>
        </form>

        {/* Social Login Buttons */}
        <div className="text-center space-x-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle hover:bg-green hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
