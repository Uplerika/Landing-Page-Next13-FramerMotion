'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import MapImg from '../public/map.png';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn } from '../utils/motion';

const World = () => {
  const worldRef = useRef(null);
  const isInView = useInView(worldRef);
  return (
    <section ref={worldRef} className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src={MapImg}
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-01.png"
              alt="people-one"
              className="w-full h-full object-contain"
              width={122}
              height={122}
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="people-two"
              width={122}
              height={122}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="people-three"
              width={122}
              height={122}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
