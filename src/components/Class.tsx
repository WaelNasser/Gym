/** @format */

"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";

const classes = [
  {
    heading: "Body Building",
    photo: "/assets/images/classes/bodyb.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus officia molestiae nihil maxime, non doloremque!",
  },
  {
    heading: "cardio",
    photo: "/assets/images/classes/cardio.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus officia molestiae nihil maxime, non doloremque!",
  },
  {
    heading: "fitness",
    photo: "/assets/images/classes/crossfit.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus officia molestiae nihil maxime, non doloremque!",
  },
  {
    heading: "crossfit",
    photo: "/assets/images/classes/fitness.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus officia molestiae nihil maxime, non doloremque!",
  },
];

const Class = () => {
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* <div className='bg-green-500 w-full h-[350px] lg:h-[450px]'>test</div> */}
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-green-500 w-full h-[400px] lg:h-[500px] flex items-center justify-center text-center relative">
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image
                src={item.photo}
                fill
                className="object-cover"
                alt="class"
              />

              <div className="z-20">
                <motion.h2
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-[32px] text-accent my-3 uppercase font-bold">
                  {item.heading}
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white mb-3 max-w-[450px]">
                  {item.desc}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}>
                  <CustomButton
                    containerStyles="py-5 px-8 mt-3"
                    text="read more"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Class;
