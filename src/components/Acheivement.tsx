"use client";
/** @format */

import React from "react";
import  CountUP from 'react-countup';
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AcheivementData = [
  {
    awards: 19,
    icon: FaBriefcase,
    desc: "training courses",
  },
  {
    awards: 879,
    icon: FaClock,
    desc: "working hours",
  },
  {
    awards: 150,
    icon: FaTrophy,
    desc: "international awards",
  },
  {
    awards: 9,
    icon: ImUsers,
    desc: "happy customers",
  },
];



// animation
const statsContainerVariant = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear',
        },
    },
};

const statsItem = {
  hidden: { y: 20 , opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25 , 0.6 , 0.3 , 0.8],
    },
  },
};
const Acheivement = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <section className="mx-auto">
      <motion.div
        variants={statsContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-16">
        {AcheivementData.map((item, index) => {
          return (
            <motion.div
              variants={statsItem}
              key={index}
              className="flex flex-col items-center justify-center p-10">
              <div
                ref={ref}
                className="border border-accent/90 w-[140px] h-[140px] rounded-full text-center p-1 mb-6">
                <div className="border border-accent/30 flex items-center justify-center w-full h-full rounded-full text-5xl">
                  {/* render the CountUP animation only the components is in view (isInView is true) */}
                  {isInView && (
                    <CountUP start={0} end={item.awards} duration={6} />
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <item.icon className="mx-auto text-3xl mb-2" />
                <h4 className="text-[26px] text-center">{item.desc}</h4>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Acheivement;
