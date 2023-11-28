'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metauniverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <b>Metaverse</b> is a new thing in the future, where you can enjoy the
        virtual world by feeling like it's really real, you can feel what you
        feel in this metaverse world, because this is really the{' '}
        <b>madness of the metaverse</b> of today, using only <b>VR</b> devices
        you can easily explore the metaverse world you want, turn your dreams
        into reality. Let's <b>explore</b> the madness of the metaverse by
        scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
