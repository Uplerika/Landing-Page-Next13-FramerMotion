'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import CoverImg from '../public/cover.png';
import styles from '../styles';
import { slideIn, textVariant } from '../utils/motion';

const Hero = () => {
  const heroRef = useRef(null);
  return (
    <section ref={heroRef} className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ root: heroRef }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            metauniverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h2 className={styles.heroHeading}>ma</h2>
            <div className={styles.heroDText} />
            <h2 className={styles.heroHeading}>ness</h2>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Image
            src={CoverImg}
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            priority
          />
          <a href="/#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt[50px] pr-[40px] relative z-10">
              <Image
                src="/stamp.png"
                alt="stamp"
                width={155}
                height={155}
                priority
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
