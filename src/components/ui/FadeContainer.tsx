"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

type FadeCardProps = {
    children: ReactNode;
    direction?: "left" | "right" | "up" | "down" | "center"; // Custom direction prop
} & Pick<HTMLAttributes<HTMLDivElement>, "className">;

const FadeContainer: React.FC<FadeCardProps> = ({ children, direction = "left", className }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the card is visible
        triggerOnce: true, // Trigger animation only once
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    // Define directional offsets
    const getInitialPosition = () => {
        switch (direction) {
            case "left":
                return { x: 100, y: 0 };
            case "right":
                return { x: -100, y: 0 };
            case "up":
                return { x: 0, y: 100 };
            case "down":
                return { x: 0, y: -100 };
            case "center":
                return { x: 0, y: 0 };
            default:
                return { x: 100, y: 0 }; // Default to left
        }
    };

    return (
        <motion.div
            ref={ref} // Attach the intersection observer
            className={clsx(className)}
            initial={{ opacity: 0, ...getInitialPosition() }} // Dynamic position
            animate={controls}
            variants={{
                hidden: { opacity: 0, ...getInitialPosition() }, // Offscreen position
                visible: { opacity: 1, x: 0, y: 0 }, // Final position
            }}
            transition={{
                duration: 0.5, // Animation duration
                ease: "easeOut", // Smooth easing
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeContainer;
