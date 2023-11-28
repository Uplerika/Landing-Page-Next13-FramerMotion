'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import WhatsNewImg from '../public/whats-new.png';
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => {
  const whatsNewRef = useRef(null);
  const isInView = useInView(whatsNewRef, { once: true });
  return (
    <section ref={whatsNewRef} className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new ?" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((el, i) => (
              <NewFeatures key={i} {...el} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src={WhatsNewImg}
            alt="whats-new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
