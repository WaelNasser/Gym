/** @format */

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import additional Swiper modules if needed (e.g., Navigation, Pagination)
import "swiper/css/navigation";

import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import {motion} from 'framer-motion';
import { fadeIn } from "@/lib/Variants";
const HeroSlide = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-center items-center lg:items-start lg:justify-end pt-36 md:pt-48">
          <div className="flex flex-col items-center lg:items-start space-y-6 mt-[20px] md:mt-[48px] text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white text-5xl md:text-7xl lg:text-[100px] uppercase tracking-[1px] font-bold lg:max-w-[700px]">
              <span className="text-accent">Where hard</span> Work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              cupiditate ratione praesentium distinctio.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mx-auto lg:mx-0">
              <CustomButton
                text="get started"
                containerStyles="w-[196px] h-[64px]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-center items-center lg:items-start lg:justify-end pt-36 md:pt-48">
          <div className="flex flex-col items-center lg:items-start space-y-6 mt-[20px] md:mt-[48px] text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white text-5xl md:text-7xl lg:text-[100px] uppercase tracking-[1px] font-bold lg:max-w-[700px]">
              <span className="text-accent">Where hard</span> Work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              cupiditate ratione praesentium distinctio.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mx-auto lg:mx-0">
              <CustomButton
                text="get started"
                containerStyles="w-[196px] h-[64px]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      {/* Swiper Button Control */}
      <SwiperNavButtons
        containerStyle="absolute bottom-[-50px] right-0 h-[130px] w-full lg:w-[780px] z-50 flex justify-center lg:justify-start gap-1 pl-0 lg:pl-[77px] xl:pl-0 mt-[15px] md:mt-[10px]"
        buttonStyle="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyle="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlide;
