/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};
const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-28" id="contact">
      <div className="mx-auto container mt-8 pb-20">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col xl:flex-row justify-between gap-10 pb-20">
          <motion.div variants={footerItem} className="w-full xl:w-1/4">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={117}
                height={55}
              />
            </Link>
            <p className="my-5 text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              autem.
            </p>
            <ul>
              <li className="flex items-center gap-5 mt-5">
                <FaLocationDot className="text-accent text-[18px] my-auto mb-2" />
                <p className="text-[22px]">Lincoln Park Chicago, Illionis</p>
              </li>
              <li className="flex items-center gap-5 mt-5">
                <FaPhoneAlt className="text-accent text-[18px] my-auto mb-2" />
                <p className="text-[18px]">(510) 710-3464 (510) 640-6326</p>
              </li>
              <li className="flex items-center gap-5 mt-5">
                <IoMail className="text-accent text-[18px] my-auto mb-2" />
                <p className="text-[18px]">waelnramadan2010@gmail.com</p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem} className="w-full xl:w-1/4">
            <h2 className="text-accent text-[26px] uppercase font-bold my-5">
              Recent blog posts
            </h2>
            <ul>
              <li className="border-b border-dotted border-gray-300 mb-4 pb-4">
                <h3 className="text-[22px] cursor-pointer leading-snug uppercase hover:text-accent transition-all duration-300">
                  how to stay motivated for all exercies
                </h3>
                <p className="text-[12px] uppercase text-gray-400">
                  septemper 22, 2024
                </p>
              </li>
              <li className="border-b border-dotted border-gray-300 mb-4 pb-4">
                <h3 className="text-[22px] cursor-pointer leading-snug uppercase hover:text-accent transition-all duration-300">
                  how to stay motivated for all exercies
                </h3>
                <p className="text-[12px] uppercase text-gray-400">
                  septemper 22, 2024
                </p>
              </li>
              <li className="border-b border-dotted border-gray-300 mb-4 pb-4">
                <h3 className="text-[22px] cursor-pointer leading-snug uppercase hover:text-accent transition-all duration-300">
                  how to stay motivated for all exercies
                </h3>
                <p className="text-[12px] uppercase text-gray-400">
                  septemper 22, 2024
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem} className="w-full xl:w-1/4">
            <h2 className="uppercase text-accent text-[26px] font-bold my-5">
              gallery
            </h2>
            <div className="grid grid-cols-7 xl:grid-cols-3">
              <Image
                className="object-contain"
                src="/assets/images/team/david.webp"
                alt="david"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/matt.jpg"
                alt="matt"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/rosy.jpg"
                alt="rosy"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/rosy.jpg"
                alt="rosy"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/david.webp"
                alt="david"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/matt.jpg"
                alt="matt"
                width={100}
                height={100}
              />
              <Image
                className="object-contain"
                src="/assets/images/team/rosy.jpg"
                alt="rosy"
                width={100}
                height={100}
              />
            </div>
          </motion.div>
          <motion.div variants={footerItem} className="w-full xl:w-1/4">
            <h2 className="text-accent uppercase text-[26px] font-bold my-5">
              newsletter
            </h2>
            <p className="text-[18px] mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus nemo rem eaque facere. Beatae, tenetur!
            </p>
            <form>
              <input
                type="text"
                placeholder="Your email address"
                className="h-[50px] outline-none px-4 text-black"
              />
              <CustomButton containerStyles="h-[50px] w-[80px]" text="send" />
            </form>
          </motion.div>
        </motion.div>
      </div>
      <div className="border-t border-gray-200 py-12">
        <div className="mx-auto container flex items-center justify-between">
          <p>© Copyright 2024 FitPhysique</p>
          <div className="flex items-center justify-between gap-5">
            <Link
              className="text-[18px] hover:text-accent transition-all duration-300"
              href="https://www.facebook.com/">
              <FaFacebook />
            </Link>
            <Link
              className="text-[18px] hover:text-accent transition-all duration-300"
              href="https://www.youtube.com/">
              <FaYoutube />
            </Link>
            <Link
              className="text-[18px] hover:text-accent transition-all duration-300"
              href="https://x.com/">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
