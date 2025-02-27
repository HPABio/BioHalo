import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { AnimatedCounterScroll } from "./AnimatedCounterScroll";

export interface StatsBoxProps {
  stat: {
    number: string;
    prefix?: string;
    suffix?: string | JSX.Element;
    label: string | JSX.Element;
  };
  text?: string;
  scrollYProgress: any;
  scrollEndThreshold?: number;
  classNamesContainer?: string;
  classNamesTitle?: string;
  classNamesSubTitle?: string;
  index?: number;
  ratchet?: boolean;
}

export function StatsBox({
  stat,
  text = "",
  scrollYProgress,
  scrollEndThreshold = 0.4,
  classNamesContainer = "backdrop-blur-sm bg-black/20 p-8 rounded-lg text-center shadow-xl",
  classNamesTitle = "text-5xl md:text-7xl font-bold text-tealAccent mb-2",
  classNamesSubTitle = "text-mintAccent text-lg font-bold -mt-4",
  index = 0,
  ratchet = false,
}: StatsBoxProps) {
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, {
    margin: "50px",
    amount: 0.1,
    once: false,
  });
  const animationRef = useRef<{ stop: () => void } | null>(null);
  const [isClient, setIsClient] = useState(false);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={classNamesContainer}
    >
      <h3 className={classNamesTitle}>
        {isClient ? (
          <AnimatedCounterScroll
            value={{
              prefix: stat.prefix,
              number: stat.number,
              suffix: stat.suffix,
            }}
            scrollYProgress={isInView ? scrollYProgress : 0}
            scrollEndThreshold={scrollEndThreshold}
            ratchet={ratchet}
          />
        ) : (
          <span>
            {stat.prefix}
            {stat.number}
            {stat.suffix}
          </span>
        )}
      </h3>
      <p className={classNamesSubTitle}>{stat.label}</p>
      {text && <p className="text-white/80 text-sm mt-4">{text}</p>}
    </motion.div>
  );
}

export function SimpleStatsBox({
  stat,
  text = "",
  scrollYProgress,
  scrollEndThreshold = 0.4,
  classNamesContainer = "backdrop-blur-sm bg-black/20 p-8 rounded-lg text-center shadow-xl",
  classNamesTitle = "text-5xl md:text-7xl font-bold text-tealAccent mb-2",
  classNamesSubTitle = "text-mintAccent text-lg font-bold -mt-4",
  index = 0,
  ratchet = false,
}: StatsBoxProps) {
  const componentRef = useRef(null);

  // Memoize the stat values to prevent unnecessary recalculations
  const memoizedStatNumber = useMemo(() => stat.number, [stat.number]);
  const memoizedStatPrefix = useMemo(() => stat.prefix, [stat.prefix]);
  const memoizedStatSuffix = useMemo(() => stat.suffix, [stat.suffix]);
  const memoizedStatLabel = useMemo(() => stat.label, [stat.label]);

  const progress = useTransform(
    scrollYProgress,
    [0, scrollEndThreshold],
    [0, 1],
    { clamp: true }
  );

  // Use the memoized stat number for the transformation
  const rounded = useTransform(progress, (latest) => {
    const numericValue = parseInt(memoizedStatNumber);
    return Math.round(isNaN(numericValue) ? 0 : numericValue * latest);
  });

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={classNamesContainer}
    >
      <h3 className={classNamesTitle}>
        <span>
          {memoizedStatPrefix}
          <motion.span>{rounded}</motion.span>
          {memoizedStatSuffix}
        </span>
      </h3>
      <p className={classNamesSubTitle}>{memoizedStatLabel}</p>
      {text && <p className="text-white/80 text-sm mt-4">{text}</p>}
    </motion.div>
  );
}

export function StaticStatsBox({
  stat,
  text = "",
  classNamesContainer = "backdrop-blur-sm bg-black/20 p-8 rounded-lg text-center shadow-xl",
  classNamesTitle = "text-5xl md:text-7xl font-bold text-tealAccent mb-2",
  classNamesSubTitle = "text-mintAccent text-lg font-bold -mt-4",
}: Omit<
  StatsBoxProps,
  "scrollYProgress" | "scrollEndThreshold" | "ratchet" | "index"
>) {
  return (
    <div className={classNamesContainer}>
      <h3 className={classNamesTitle}>
        <span>
          {stat.prefix}
          {stat.number}
          {stat.suffix}
        </span>
      </h3>
      <p className={classNamesSubTitle}>{stat.label}</p>
      {text && <p className="text-white/80 text-sm mt-4">{text}</p>}
    </div>
  );
}
