import React, { useState } from "react";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:3000/api/signin", {
            email: email,
            password: password,
        });

        const data = response.data;

        if (response.status === 200) {
            // Storing JWT token in the local storage
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("userId", data.userExists._id);
            toast("Login Successfully");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else if (response.status === 403) {
            toast("Email or password incorrect.");
        } else {
            toast("Something went wrong. Try again!");
        }
    } catch (error) {
        console.error("Sign-in error:", error);
    }
}

  return (
    <div className="flex justify-center items-center bg-zinc-200 h-screen font-sans">
      <div className=" bg-white w-fit rounded-3xl flex xs:flex-col lg:flex-row gap-15 p-10">
        {/* left div */}
        <div>
          <div>
            <img src={google} />
          </div>
          <h1 className="mt-5 text-4xl ">Sign in</h1>
          <p className="mt-5 text-[16px] text-zinc-800">
            with your Google Account to continue to YouTube. This <br />
            account will be available to other Google apps in the <br />
            browser.
          </p>
        </div>

        {/* right div */}

        <div>
          <input
            type="text"
            name="email"
            placeholder="Email or phone"
            className="w-full p-4 border-1 border-zinc-500 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            className="w-full p-4 border-1 border-zinc-500 rounded-md mt-5"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="mt-3 text-blue-700 text-sm font-medium">
            Forgot password?
          </p>
          <p className="mt-10">
            Not your computer? Use Guest mode to sign in privately. Learn <br />
            more about using Guest mode
          </p>

          <div className="mt-10 flex gap-10 justify-end items-center">
            <Link to="/signup">
              <p className="text-blue-700 font-medium cursor-pointer">
                Create Account
              </p>
            </Link>
            <button
              className="cursor-pointer bg-blue-700 text-slate-50 font-medium px-6 py-2 rounded-3xl hover:bg-blue-500"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
