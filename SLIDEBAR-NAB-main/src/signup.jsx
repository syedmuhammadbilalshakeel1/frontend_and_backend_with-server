import React from "react";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Image2 from "./pexels-cottonbro-studio-2773503.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SignUp() {
  // axios({
  //   url: "http://localhost:3000/registration",
  //   method: "POST",
  // });

  // const [Name, SetName] = useState("");

  // const [Email, setEmail] = useState("");
  // const [Pas, setpas] = useState("");

  const [emailData, setEmail] = useState();
  const [passData, setpas] = useState();

  const EMAIL = (e) => {
    setEmail(e.target.value);
  };
  const PASSWORD = (e) => {
    setpas(e.target.value);
  };

  const submitForm = async (data) => {
    data.preventDefault();
    const obj = {
      email: emailData,
      password: passData,
    };

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/register",
        data: obj,
      });

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  // console.log(theme, "theme");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  // function register() {}

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;

      case "light":
        element.classList.remove("dark");
        break;

      default:
        break;
    }
  }, [theme]);

  return (
    <>
      <section className="form h-auto ov dark:text-gray-100 dark:bg-slate-800 duration-100">
        <div className="light-mode fixed top-5 right-10 bg-gray-600 rounded">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 text-xl rounded-full  ${
                theme === opt.text && "text-sky-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>

        <div
          className="logo fixed top-4 h-4"
          style={{ background: "url('/white.png')" }}
        ></div>

        <div className="flex">
          <div className="img  w-[40%] overflow-hidden bg-indigo-300 dark:bg-slate-600 md:flex items-center justify-center hidden">
            <img
              className="w-[120vh]  h-[100vh] overflow-hidden"
              src={Image2}
              alt=""
            />
          </div>
          <div className="mx-auto  pt-32">
            <form
              onSubmit={submitForm}
              className="space-y-4 overflow-hidden w-96 border-slate-300 h-[79.6vh] flex flex-col"
            >
              <h1 className="text-4xl font-Poppins">Sign up to the Udemy</h1>
              {/* <h1 className="text-4xl font-Poppins">Sign up</h1> */}
              <p className="text-slate-500  font-medium font-Raleway dark:text-gray-100">
                Welcome back please enter your details
              </p>

              <div className="email">
                <div>
                  <label
                    htmlFor=""
                    className="text-slate-500 font-Raleway font-medium dark:text-gray-100"
                  >
                    Name
                  </label>
                </div>
                <div>
                  <input
                    name="first Name"
                    id="ema"
                    autoComplete="off"
                    className="border  border-gray-400 w-full  font-sans rounded text-gray-800 pt-3 pb-3 placeholder:pl-5 dark:bg-slate-600 dark:border-transparent    "
                    // type="email"
                    placeholder="Enter your name"
                    // required
                    // onChange={(e) => {
                    //   SetName(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="email">
                <div>
                  <label
                    htmlFor=""
                    className="text-slate-500 font-Raleway font-medium dark:text-gray-100"
                  >
                    Email Address
                  </label>
                </div>
                <div>
                  <input
                    name="email"
                    id="ema"
                    // value={Email}
                    autoComplete="off"
                    className="border  border-gray-400 w-full  font-sans rounded text-gray-800 pt-3 pb-3 placeholder:pl-5 dark:bg-slate-600 dark:border-transparent    "
                    type="email"
                    placeholder="Enter your email"
                    required
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                    onChange={EMAIL}
                  />
                </div>
              </div>

              <div className="password">
                <div>
                  <label
                    htmlFor=""
                    className="text-slate-500 font-Raleway  font-medium dark:text-gray-100"
                  >
                    Password
                  </label>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="pas"
                    // value={Pas}
                    name="password"
                    autoComplete="off"
                    className="border border-gray-400 
                                 w-full rounded
                                 text-gray-800
                                 pt-3 pb-3
                                 placeholder:pl-5
                                 font-sans
                                  dark:bg-gray-600  
                                   dark:border-transparent   
                                 
                                 "
                    required
                    onChange={PASSWORD}
                    // onChange={(e) => {
                    //   setpas(e.target.value);
                    // }}
                  />
                </div>
              </div>

              <div className="remember flex  items-center">
                {/* <div className="pl-2 ">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-sm pl-2  font-Raleway font-medium  dark:text-gray-600"
                  >
                    Remember me
                  </label>
                </div> */}

                {/* <div className="forget text-indigo-700 pl-12">
                  <a href="" className="font-medium text-sm font-Raleway dark:text-gray-600">
                    Forget password
                  </a>
                </div> */}
              </div>
              <div>
                <button
                  type="sign_in"
                  className="bg-indigo-600 h-auto hover:drop-shadow-md   dark:bg-gray-600 dark: hover:bg-rose-500  pt-2 pb-2  font-normal text-slate-300 font-Raleway w-1/2 rounded"
                >
                  Sign Up
                </button>
              </div>
              <NavLink to="/signin">Already have an account? Login </NavLink>
            </form>
          </div>

          {/* <div className="img  w-[50%] overflow-hidden bg-indigo-300 dark:bg-slate-600 md:flex items-center justify-center hidden">
          <img
            className="w-[120vh]  h-[100vh] overflow-hidden"
            src={Image}
            alt=""
          />
        </div> */}
        </div>
      </section>
    </>
  );
}

export default SignUp;
