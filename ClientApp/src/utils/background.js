import BG1 from "../assets/course_bg_1.png"
import BG2 from "../assets/course_bg_2.png"
import BG3 from "../assets/course_bg_3.png"
import BG4 from "../assets/course_bg_4.png"

const backgrounds = [ BG1, BG2, BG3, BG4 ]

export const randomBackground = () => backgrounds[Math.floor(Math.random() * backgrounds.length)]

