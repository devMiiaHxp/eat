// import React from "react";
import asideImage from "/src/feedallImg.jpg";
import "./homePage.scss";
import { Link } from "react-router-dom";
import NavBar from "./nav";
import {motion} from 'framer-motion'
import { FaLongArrowAltRight } from "react-icons/fa";
function HomePage() {
  return (
    <>
      <NavBar />

      <div className="wrapper">
        <div className="home-container">
          <div className="hero-description">
          <motion.h1
            initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 1,
                  delay: 1,
                  duration: 1.5,
                  type: "tween",
                },
              }}
          >
              A truly circular
              <div>food</div>
              production platform
            </motion.h1>
            <div className="image-background-mobile">
              <img  className='image-background-mobile' src={asideImage} width={340} alt="feedall" />
            </div>
          </div>
          <div className="links">
            <Link to="/join">
               <motion.h1
            initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 1,
                  delay: 0.7,
                  duration: .5,
                  type: "tween",
                },
              }}
          >Join Our Team </motion.h1>
          <FaLongArrowAltRight width={100} />
            </Link>
            <Link to="/invest">
              <motion.h1
            initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 1,
                  delay: 0.8,
                  duration: .5,
                  type: "tween",
                },
              }}>Become an Investor</motion.h1>
                        <FaLongArrowAltRight width={100} />

            </Link>
            <Link to="/join-cohort">
              <motion.h1
            initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 1,
                  delay: 0.9,
                  duration: .5,
                  type: "tween",
                },
              }}>Join The Next Cohort </motion.h1>
                        <FaLongArrowAltRight width={100} />

            </Link>
            <Link to="/faq">
              <motion.h1
            initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 1,
                  delay: 1,
                  duration: .5,
                  type: "tween",
                },
              }}>FAQ</motion.h1>
                        <FaLongArrowAltRight width={100} />

            </Link>
          </div>
        </div>
        <div className="image-background">
          <img src={asideImage} width={500} alt="feedall" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
