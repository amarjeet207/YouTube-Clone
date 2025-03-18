import React, { useState } from "react";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicUrl,setProfilePicUrl] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e) {
      e.preventDefault();
  
      try {
          const response = await axios.post("http://localhost:3000/api/signup", {
              fullName: fullName,
              email: email,
              password: password,
              profilePicUrl: profilePicUrl,
          });
  
          if (response.status === 201) {
              toast("Account created successfully!");
              setTimeout(() => {
                  navigate("/signin");
              }, 1000);
          } else if (response.status === 403) {
              toast("User with this email already exists.");
          } else {
              toast("Something went wrong. Try again!");
          }
      } catch (error) {
          console.error("Sign-up error:", error);
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
          <h1 className="mt-5 text-4xl ">Create a Google Account</h1>
          <p className="mt-5 text-[16px] text-zinc-800">Enter your Details</p>
        </div>

        {/* right div */}

        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-4 border-1 border-zinc-500 rounded-md"
            required
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full p-4 border-1 border-zinc-500 mt-5 rounded-md"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            className="w-full p-4 border-1 border-zinc-500 mt-5 rounded-md"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-10 flex gap-10 justify-end items-center">
            <button
              className="cursor-pointer bg-blue-700 text-slate-50 font-medium px-6 py-2 rounded-3xl hover:bg-blue-500"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
