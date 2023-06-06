import React, { useState } from "react";
import Styles from "./FunGuess.module.css";
import Lottie from "lottie-react";
import CatAnimationLottie from "../../assets/lotties/95990-kitty-confused.json";
import ConfuseAnimation from "../../assets/lotties/81921-confusion.json";
import DragAnimation from "../../assets/lotties/45709-swipe-right.json";
import { motion } from "framer-motion";
import { funguess } from "../../libs/funguess";
import { useEffect } from "react";

function FunGuess() {
    const [answer, setAnswer] = useState("");
    const [game, setGame] = useState({});
    const [gameIndex, setGameIndex] = useState(0);

    useEffect(() => {
        // Initialize game
        setGame(funguess[gameIndex]);
    }, [gameIndex])

    const handleToNextGame = () => {
        if (gameIndex >= funguess.length - 1) {
            setGameIndex(0);
            return;
        }
        setGameIndex(prev => prev + 1);
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <div className={Styles.info_container}>
                    <h4>Fun Guess</h4>
                    <ul>
                        {game?.hints?.map((hint) => (
                            <li>
                                <p className={Styles.hint}>{hint}</p>
                            </li>
                            ))}
                    </ul>

                    <div className={Styles.input_title}>
                        <div className={Styles.cat_animation}>
                            <Lottie
                                animationData={CatAnimationLottie}
                                loop={true}
                            />
                        </div>
                        <p>What's in your mind?</p>
                    </div>

                    <div>
                        <input
                            className={Styles.answer_input}
                            type="text"
                            id="answer"
                            placeholder="Type your answer here"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </div>

                    <button className="secondary_button circle" onClick={handleToNextGame}>
                        Next Game
                    </button>
                </div>

                <div className={Styles.answer_container}>
                    <div>
                        <img
                            src={game.imageUrl}
                            alt="Answer image"
                        />
                        <p>It's {game.answer}!</p>
                    </div>

                    {/* Drag Area */}
                    <motion.div
                        className={Styles.drag_container}
                        drag
                        dragConstraints={{ top: 10, bottom: -10, left: -50, right: 500 }}
                    >
                        <div className={Styles.confuse_animation}>
                            <Lottie
                                animationData={ConfuseAnimation}
                                loop={true}
                            />
                        </div>
                        <p>Drag to reveal the answer!</p>
                        <div className={Styles.drag_animation}>
                            <Lottie
                                animationData={DragAnimation}
                                loop={true}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default FunGuess;
