import React from "react";
import HomeStyles from "./home.module.css";
import LittleBoy from "../../assets/little_boy.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function BeginnerBanner() {
    const navigate = useNavigate();

    return (
        <section className={HomeStyles.banner_1_container}>
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2 }}
            >
                <img
                    src={LittleBoy}
                    alt="Interactive image"
                    className={HomeStyles.banner_1_image}
                />
            </motion.div>

            <div className={HomeStyles.banner_1_content}>
                <motion.h4
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                >
                    From beginner level
                </motion.h4>
                <motion.p
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, delay: 0.15 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </motion.p>
                <motion.button
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, delay: 0.15 }}
                    className="secondary_button circle"
                    onClick={() => { navigate('/courses') }} // Explore now action
                >
                    <p className="f-6">Guide Me</p>
                </motion.button>
            </div>
        </section>
    );
}

export default BeginnerBanner;
