/** @format */
"use client";
import React from "react";
import MembershipSlider from "./MembershipSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-8 xl:py-0 bg-membership bg-cover bg-center"
      id="prices">
      <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="text-[36px] text-white text-center mb-8">
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}>
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
