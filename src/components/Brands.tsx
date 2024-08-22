"use client";

import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";


const brands = [
  {
    src: "/assets/images/brand/img1.png",
  },
  {
    src: "/assets/images/brand/img5.png",
  },
  {
    src: "/assets/images/brand/img3.png",
  },
  {
    src: "/assets/images/brand/img4.png",
  },
  {
    src: "/assets/images/brand/img5.png",
  },
];

const brandContainerVariant = {
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

const brandItem = {
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
const Brands = () => {
  return (
    <section className="py-8">
      <div className="mx-auto container">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-5 py-8">
          {brands.map((brand, index) => {
            return (
              <motion.div
                variants={brandItem}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="">
                <Image
                  className="opacity-50 hover:opacity-100 transition-all duration-300 mx-auto"
                  src={brand.src}
                  alt=""
                  width={204}
                  height={106}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Brands