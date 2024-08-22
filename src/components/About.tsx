"use client";

/** @format */
import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import Acheivement from "./Acheivement";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";

const AboutData = [
  {
    icon: <FaUsers />,
    header: "award-winning trainers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere ipsam at est rerum laborum recusandae nihil magnam corrupti exercitationem!",
  },
  {
    icon: <IoIosPricetag />,
    header: "excellent prices",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere ipsam at est rerum laborum recusandae nihil magnam corrupti exercitationem!",
  },
  {
    icon: <FaDumbbell />,
    header: "modern equipment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere ipsam at est rerum laborum recusandae nihil magnam corrupti exercitationem!",
  },
];
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto pt-20">
        {/* Header of about page */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[36px] font-bold text-center mb-4">
          About us
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-[600px] text-center mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          aperiam obcaecati enim necessitatibus neque maxime.
        </motion.p>

        {/* Div of About Data */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {AboutData.map((item, index) => {
            return (
              <div
                className="border border-gray-200 p-10 mx-2 my-2 lg:my-0 flex flex-col items-center justify-center space-y-5 text-center"
                key={index}>
                <div className="bg-primary p-2 rounded-full text-white text-4xl w-[80px] h-[80px] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-[26px] text-accent uppercase">
                  {item.header}
                </h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Achevment */}
        <div>
          <Acheivement />
        </div>
      </div>
    </section>
  );
};

export default About;
