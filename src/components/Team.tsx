"use client";

import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";

const trainer = [
  {
    img: "/assets/images/team/david.webp",
    head: "David williams",
    job: "body builder coach",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, veritatis",
    icons: [
      { facebook: <FaFacebook /> },
      { twitter: <FaTwitter /> },
      { youtube: <FaYoutube /> },
    ],
  },
  {
    img: "/assets/images/team/rosy.jpg",
    head: "Rosy Rivera",
    job: "body builder coach",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, veritatis",
    icons: [
      { facebook: <FaFacebook /> },
      { twitter: <FaTwitter /> },
      { youtube: <FaYoutube /> },
    ],
  },
  {
    img: "/assets/images/team/matt.jpg",
    head: "Matt Stone",
    job: "body builder coach",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, veritatis",
    icons: [
      { facebook: <FaFacebook /> },
      { twitter: <FaTwitter /> },
      { youtube: <FaYoutube /> },
    ],
  },
  {
    img: "/assets/images/team/sofia.jpg",
    head: "Sofia Lauren",
    job: "body builder coach",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, veritatis",
    icons: [
      { facebook: <FaFacebook /> },
      { twitter: <FaTwitter /> },
      { youtube: <FaYoutube /> },
    ],
  },
];

const Team = () => {
  return (
    <section className="" id="team">
      <div className="mx-auto container py-28 h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[36px] font-bold uppercase text-center mb-8">
          our trainers
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          {trainer.map((item, index) => {
            return (
              <div className="mt-8" key={index}>
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={item.img} fill alt="trainer" />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="uppercase text-[22px] font-bold">
                    {item.head}
                  </h2>
                  <h5 className="font-normal mb-1 uppercase">{item.job}</h5>
                  <p>{item.desc}</p>
                  <div className="flex justify-around items-center gap-8 mt-3">
                    {item.icons.map((icon, index) => {
                      return (
                        <div
                          className="cursor-pointer hover:text-accent text-[20px]"
                          key={index}>
                          {icon.facebook}
                          {icon.twitter}
                          {icon.youtube}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}>
          <CustomButton
            containerStyles="mx-auto py-5 px-6 mt-6"
            text="see all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Team