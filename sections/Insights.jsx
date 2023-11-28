'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => {
  const insightsRef = useRef(null);
  const isInView = useInView(insightsRef, { once: true });
  return (
    <section ref={insightsRef} className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((el, i) => (
            <InsightCard key={i} {...el} index={i + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
