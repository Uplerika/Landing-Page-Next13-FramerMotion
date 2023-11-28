'use client';
import { useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from '../styles';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const exploreRef = useRef(null);
  const isInView = useInView(exploreRef, { once: true });

  return (
    <section ref={exploreRef} className={`${styles.paddings}`} id="explore">
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
