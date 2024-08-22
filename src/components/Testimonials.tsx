/** @format */

"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";
import { RiDoubleQuotesL } from "react-icons/ri";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonialsData = [
  {
    src: "/assets/images/testimonails/lucy.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Lucy Anthony",
  },
  {
    src: "/assets/images/testimonails/maria.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Maria Garcia",
  },
  {
    src: "/assets/images/testimonails/michael.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Michael Smith",
  },
  {
    src: "/assets/images/testimonails/lucy.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Lucy Anthony",
  },
  {
    src: "/assets/images/testimonails/maria.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Maria Garcia",
  },
  {
    src: "/assets/images/testimonails/michael.jpg",
    icon: <RiDoubleQuotesL />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat delectus ex.",
    name: "Michael Smith",
  },
];
const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto container">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[32px] mb-10 font-bold uppercase text-center">
          Our Testimonials
        </motion.h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="h-[350px]"
          id="testimonials">
          {testimonialsData.map((item, index) => {
            return (
              <SwiperSlide className="h-full" key={index}>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-center flex items-center justify-center flex-col gap-6">
                  <div className="border border-accent rounded-full">
                    <Image
                      className="rounded-full"
                      src={item.src}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <div className="text-gray-500 text-3xl font-bold">
                      {item.icon}
                    </div>
                    <p>{item.desc}</p>
                  </div>
                  <h2 className="text-accent text-3xl">{item.name}</h2>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
