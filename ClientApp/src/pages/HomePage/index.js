import React, { useEffect } from "react";
import HeroBanner from "./HeroBanner";
import SmallBanner from "./SmallBanner";
import HomeStyles from "./home.module.css";
import BeginnerBanner from "./BeginnerBanner";
import InteractiveBanner from "./InteractiveBanner";

function Home() {


    return (
        <div className={HomeStyles.home_container}>
            {/* Hero Section */}
            <HeroBanner />

            {/* Small Banner */}
            <SmallBanner />

            <BeginnerBanner />

            <InteractiveBanner />
        </div>
    );
}

export default Home;
