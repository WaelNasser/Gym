/** @format */

import { Link as ScrollLink } from "react-scroll";

const Links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonials", target: "testimonials", offset: 0 },
  { name: "blog", target: "blog", offset: -0 },
  { name: "contact", target: "contact", offset: -0 },
];

const Nav = ({ containerStyle }: { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      {Links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            className="cursor-pointer hover:text-accent transition-all"
            key={index}>
                {link.name}
            </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
