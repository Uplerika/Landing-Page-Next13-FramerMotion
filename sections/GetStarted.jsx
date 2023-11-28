'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import GetStartedImg from '../public/get-started.png';
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { fadeIn, planetVariants } from '../utils/motion';
import { startingFeatures } from '../constants';

const GetStarted = () => {
  const getStartedRef = useRef(null);
  const isInView = useInView(getStartedRef, { once: true });
  return (
    <section ref={getStartedRef} className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src={GetStartedImg}
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metauniverse Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((el, i) => (
              <StartSteps key={i} number={i + 1} text={el} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
