import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={require("../assets/loginBackgroundImage.jpg")}
          alt="backgroundImg"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-sm">
        <h2 className="font-bold text-3xl py-4">Sign In</h2>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-500 bg-opacity-50 rounded-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-500 bg-opacity-50 rounded-sm"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-sm">
          Sign In
        </button>
        <a href="#" className="block text-center">
          Forgot Password ?{" "}
        </a>

        <div className="mt-14">
          <input type="checkbox" id="rememberMe" class="h-4 w-4 mr-2" />
          <label for="rememberMe">Remember Me</label>
          <p className="mt-1 text-gray-500">
            New to Netflix?{" "}
            <span className="text-white font-bold">Sign Up Now</span>
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-800">Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
