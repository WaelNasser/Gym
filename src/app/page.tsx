import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Brands from "@/components/Brands";
import Class from "@/components/Class";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return <main className="font-rubik">
    <Hero />
    <About />
    <Class />
    <Team />
    <Membership />
    <Testimonials />
    <Blogs />
    <Brands />
  </main>;
}
