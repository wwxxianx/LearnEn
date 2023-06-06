import React from "react";
import HomeStyles from "./home.module.css"
import HeroImage from "../../assets/hero_character.png"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

function HeroBanner() {
    const navigate = useNavigate();

    return (
        <section className={HomeStyles.hero_container}>
            <div className={HomeStyles.hero_description}>
                <motion.h3
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={HomeStyles.hero_title}
                >
                    A New <br /> Different Way to <br /> Improve Your English
                </motion.h3>
                <motion.p
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    className={HomeStyles.hero_subtitle}
                >
                    We provide free courses and cover from beginner level to
                    pro.
                </motion.p>
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={HomeStyles.hero_button_container}
                >
                    <button
                        className="primary_button circle"
                        onClick={() => { navigate('/courses') }}
                    >
                        <p className="f-6">Explore Now</p>
                    </button>
                    <button
                        className="secondary_button circle"
                        onClick={() => { navigate('/writings') }}
                    >
                        <p className="f-6">Guide Me</p>
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <img
                    src={HeroImage}
                    alt="Hero image"
                    className={HomeStyles.hero_image}
                />
            </motion.div>
        </section>
    );
}

export default HeroBanner;
