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

const PhoneIcon = forwardRef(
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

    // const handleEnter = useCallback((e) => {
    //     if (reduced) return;
    //     if (!isControlled.current) controls.start("animate");
    //     else onMouseEnter?.(e);
    // }, [controls, reduced, onMouseEnter]);

    // const handleLeave = useCallback((e) => {
    //     if (!isControlled.current) controls.start("normal");
    //     else onMouseLeave?.(e);
    // }, [controls, onMouseLeave]);

    const waveGroup = {
      normal: { rotate: 0, scale: 1 },
      animate: {
        rotate: [0, -3, 3, -2, 2, 0],
        scale: [1, 1.02, 1, 1.015, 1],
        transition: {
          duration: 1.9,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.9,
          ease: "easeInOut",
        },
      },
    };

    const drawAndGlow = {
      normal: { strokeDashoffset: 0, opacity: 1 },
      animate: {
        strokeDashoffset: [110, 0],
        opacity: [0.55, 1, 0.9, 1],
        transition: {
          duration: 1.3,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.9,
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
          className="lucide lucide-phone-icon lucide-phone"
        >
          <motion.g variants={waveGroup} initial="normal" animate={controls}>
            <motion.path
              d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
              strokeDasharray="110"
              strokeDashoffset="110"
              variants={drawAndGlow}
              initial="normal"
              animate={controls}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    );
  }
);

PhoneIcon.displayName = "PhoneIcon";
export { PhoneIcon };
