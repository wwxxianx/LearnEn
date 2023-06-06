import Styles from './AboutUs.module.css';
import HeroImage from '../../assets/about_hero_image.png';
import CourseIcon from '../../assets/couse_icon.svg';
import AssistedStudentIcon from '../../assets/assited_student.svg';
import StatisticsIcon from '../../assets/statistics_icon.svg';
import Avatar from '@mui/material/Avatar';

function AboutUs() {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <section className={Styles.hero}>
                    <div className={Styles.hero_bg}></div>
                    <div className={Styles.hero_text}>
                        <p className={Styles.hero_title}><span>Studying</span> Online is now much easier</p>
                        <p className={Styles.hero_subtitle}>LearnEn  is an interesting platform that will teach you in more an interactive way</p>
                        <button
                            className='primary_button circle'
                        >
                            Explore Now
                        </button>
                    </div>

                    <div className={Styles.hero_image_wrapper}>
                        <div className={Styles.hero_image}>
                            <img
                                src={HeroImage}
                                alt='Hero image'
                            />
                        </div>
                        <div className={Styles.statistics_icon}>
                            <img
                                src={StatisticsIcon}
                                alt=''
                            />
                        </div>

                        <div className={`${Styles.icon_card} ${Styles.student_icon_card}`}>
                            <img
                                src={AssistedStudentIcon}
                                alt='Icon'
                            />
                            <div>
                                <p className={Styles.icon_card_title}>250k</p>
                                <p className={Styles.icon_card_subtitle}>Assisted Student</p>
                            </div>
                        </div>

                        <div className={`${Styles.icon_card} ${Styles.congratulation_icon_card}`}>
                            <img
                                src={CourseIcon}
                                alt='Icon'
                            />
                            <div>
                                <p className={Styles.icon_card_title}>Congratulations</p>
                                <p className={Styles.icon_card_subtitle}>Your admission completed</p>
                            </div>
                        </div>

                        <div className={`${Styles.icon_card} ${Styles.course_icon_card}`}>
                            <img
                                src={StatisticsIcon}
                                alt='Icon'
                            />
                            <div>
                                <p className={Styles.icon_card_title}>1.2k Free Courses</p>
                                <button
                                    className={Styles.course_icon_card_button}
                                    onClick={() => { }}
                                >Join Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={Styles.team}>
                    <h3>Our Team</h3>
                    <p>Learning english can be fun and simple, they are often used in cases. Meet our teachers.</p>

                    <div className={Styles.member_container}>
                        <div className={Styles.member}>
                            <h3>Ngu Wei Xian</h3>
                            <p>Developer</p>
                            <Avatar sx={{ justifySelf: 'flex-end' }}>N</Avatar>
                        </div>

                        <div className={Styles.member}>
                            <h3>Lai Jun Da</h3>
                            <p>Developer</p>
                            <Avatar sx={{ justifySelf: 'flex-end' }}>L</Avatar>
                        </div>

                        <div className={Styles.member}>
                            <h3>Chew Kai Cong</h3>
                            <p>Developer</p>
                            <Avatar sx={{ justifySelf: 'flex-end' }}>C</Avatar>
                        </div>

                        <div className={Styles.member}>
                            <h3>Bryan Lee Jun Xian</h3>
                            <p>Developer</p>
                            <Avatar sx={{ justifySelf: 'flex-end' }}>B</Avatar>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        )
}

export default AboutUs;