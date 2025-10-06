"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";

const ShoppingBagIcon = forwardRef(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    // Auto-start animation on mount
    useEffect(() => {
      if (!reduced && !isControlled.current) {
        controls.start("animate");
      }
    }, [controls, reduced]);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    // const handleEnter = useCallback(
    //   (e) => {
    //     if (reduced) return;
    //     if (!isControlled.current) controls.start("animate");
    //     else onMouseEnter?.(e);
    //   },
    //   [controls, reduced, onMouseEnter]
    // );

    // const handleLeave = useCallback(
    //   (e) => {
    //     if (!isControlled.current) {
    //       controls.start("normal");
    //     } else {
    //       onMouseLeave?.(e);
    //     }
    //   },
    //   [controls, onMouseLeave]
    // );
    const bagVariants = {
      normal: { scaleY: 1, scaleX: 1, rotate: 0, y: 0 },
      animate: {
        scaleY: [1, 0.85, 1.1, 1],
        scaleX: [1, 1.1, 0.9, 1],
        rotate: [0, -4, 4, -2, 0],
        y: [0, -3, 0, -1, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
          ease: "easeInOut",
        },
      },
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        //onMouseEnter={handleEnter}
        //onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={bagVariants}
        >
          <path d="M16 10a4 4 0 0 1-8 0" />
          <path d="M3.103 6.034h17.794" />
          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
        </motion.svg>
      </motion.div>
    );
  }
);

ShoppingBagIcon.displayName = "ShoppingBagIcon";
export { ShoppingBagIcon };
