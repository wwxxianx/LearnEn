import React from "react";
import BannerImage from "../../assets/girl_and_boy_discussion.png";
import HomeStyles from "./home.module.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function InteractiveBanner() {
    const navigate = useNavigate();

    return (
        <section className={HomeStyles.banner_2_container}>
            <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2 }}
            >
                <img
                    src={BannerImage}
                    alt="Girl and boy discussion"
                    className={HomeStyles.banner_2_image}
                />
            </motion.div>

            <div className={HomeStyles.banner_1_content}>
                <motion.h4
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                >
                    Interactive experience
                </motion.h4>
                <motion.p
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, delay: 0.15 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </motion.p>
                <motion.button
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, delay: 0.15 }}
                    className={`secondary_button circle ${HomeStyles.banner_2_button}`}
                    onClick={() => { navigate('/writings') }} // Explore now action
                >
                    <p className="f-6">Explore Now</p>
                </motion.button>
            </div>
        </section>
    );
}

export default InteractiveBanner;
