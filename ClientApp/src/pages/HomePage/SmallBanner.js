import React from "react";
import HomeStyles from "./home.module.css";
import Logo from "../../assets/learnEn_logo.png";
import { motion } from "framer-motion";

function SmallBanner() {
    return (
        <section className={HomeStyles.small_banner_container}>
            <div>
                <div className={HomeStyles.small_banner_title}>
                    <motion.img
                        initial={{ y: -60, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1.7 }}
                        src={Logo}
                        alt="Logo"
                    />

                    <motion.p
                        initial={{ y: -60, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1.7, delay: 0.15 }}
                    >
                        Who We Are
                    </motion.p>
                </div>
                <motion.p
                    initial={{ y: 60, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`subtitle-2 ${HomeStyles.small_banner_subtitle}`}
                >
                    We provide free english learning resources that are
                    interactive and fun.
                </motion.p>
            </div>
        </section>
    );
}

export default SmallBanner;
