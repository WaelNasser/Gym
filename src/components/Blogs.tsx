/** @format */

"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const dataBlog = [
  {
    src: "/assets/images/blog/post1.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post2.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post3.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post4.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post1.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post2.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post3.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
  {
    src: "/assets/images/blog/post4.jpg",
    date: "march 10, 2024",
    desc: "maintain a perfect structure after workout",
  },
];

const Blogs = () => {
  return (
    <div className="bg-primary text-white py-24" id="blog">
      <div className="mx-auto container">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[32px] uppercase text-center font-bold mb-10">
          blog
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}>
            {dataBlog.map((blog, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center">
                    <Image
                      className="mb-5"
                      src={blog.src}
                      alt=""
                      width={360}
                      height={266}
                    />
                    <p className="uppercase font-normal">{blog.date}</p>
                    <h3 className="uppercase text-[17px] leading-none mt-1 max-w-[98%]">
                      {blog.desc}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyle="absolute bottom-[16rem] top-[100px] right-0 left-0 w-full max-w-[370px] sm:max-w-[780px] md:max-w-[960px]
              xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              buttonStyle="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyle="text-2xl"
            />
          </Swiper>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-center mx-auto text-center mt-20">
          <CustomButton
            containerStyles="w-[196] h-[64] px-14 py-6"
            text="view all"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
