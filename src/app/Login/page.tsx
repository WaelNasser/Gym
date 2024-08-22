/** @format */
"use client";

import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";
import Link from "next/link";

const Login = () => {

  const[change , setchange] = useState(false);

  const toggleChange = ()=> {
    setchange(!change);
  }
  
  return (
    <div className="h-[100vh] bg-hero object-contain bg-center bg-no-repeat bg-cover">
      <div className="bg-black/50 w-full h-full flex justify-center items-center text-white">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="z-10 bg-accent rounded-xl sm:-h-[600px] md:mt-[125px]">
          <h2 className="mt-2 py-4 text-center text-[26px] font-bold">
            Welocme to our gym
          </h2>
          <p className="text-sm text-[18px] px-4 lg:text-xl text-center my-4 font-semibold">
            Join us to make a new model of your live
          </p>
          <div className="bg-white text-black rounded-xl py-16 px-5 flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Username or email"
              className="py-3 px-3 text-[16px] w-full bg-gray-200 rounded-xl outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-3 px-3 text-[16px] w-full bg-gray-200 rounded-xl outline-none mt-8"
            />
            <div className="flex items-center justify-between w-full my-8">
              <div className="flex items-center justify-center gap-2">
                <div onClick={toggleChange}>
                  {change ? (
                    <IoIosCheckboxOutline color="red" size={24} />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank color="red" size={24} />
                  )}
                </div>
                <p className="text-gray-500 sm:text-sm">Remember me</p>
              </div>
              <Link
                href="/"
                className="cursor-pointer text-sm md:text-[16px] text-accent">
                Forget password?
              </Link>
            </div>
            <button className="rounded-3xl font-semibold w-full py-3 bg-accent text-white border border-accent hover:bg-transparent hover:text-accent hover:border transition-all duration-300">
              Sign in
            </button>
            <p className="py-5 cursor-pointer">Sign In With Social</p>
            <div className="flex items-center justify-center gap-4 pt-5">
              <Link href="https://www.google.com/">
                <FaGoogle className="cursor-pointer hover:text-accent transition-all duration-300 text-xl" />
              </Link>
              <Link href="https://www.facebook.com/">
                <FaFacebook className="cursor-pointer hover:text-accent transition-all duration-300 text-xl" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="cursor-pointer hover:text-accent transition-all duration-300 text-xl" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
