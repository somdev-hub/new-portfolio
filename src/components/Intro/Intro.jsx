import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy1.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hii! I Am</span>
          <span>Somdev Behera</span>
          <span>
            Web developer and blogger producing quality work and learning
            constantly
          </span>
        </div>

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/somdev-hub" target="_blank">
            <img src={Github}></img>
          </a>
          <a href="https://linkedin.com/somdev-behera" target="_blank">
            <img src={Linkedin}></img>
          </a>
          <a href="https://instagram.com/somdev_behera" target="_blank">
            <img src={Instagram}></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-26%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ left: "74%", top: "-20%" }}
          whileInView={{ left: "68%", top: "20%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Quality" txt2="Projects" />
        </motion.div>

        <div className="blur"></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
