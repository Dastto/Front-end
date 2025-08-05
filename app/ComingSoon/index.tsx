// ComingSoon.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #1A1A2E, #3E7BFF)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        overflow: "hidden",
      }}
    >
      <motion.div
        drag
        dragElastic={0.12}
        dragConstraints={containerRef}
        className={"group"}
        style={{
          width: 420,
          height: 280,
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 10px 40px rgba(62, 123, 255, 0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
          x,
          y,
          rotateX,
          rotateY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <img
          src="/Images/dino1.png"
          alt=""
          className={"hidden group-hover:block"}
        />
        <img
          src="/Images/dino2.png"
          alt=""
          className={"group-hover:hidden block"}
        />
        <h1
          style={{
            fontSize: "2.2rem",
            color: "#fff",
            marginBottom: "0.6rem",
            textShadow: "0 0 10px rgba(62, 123, 255, 0.5)",
          }}
        >
          اماده باشید!
        </h1>
        <p
          style={{
            color: "#ddd",
            fontSize: "1rem",
            maxWidth: 280,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          به زودی اماده یک تغییر بزرگ در دست خود باشید!
        </p>
      </motion.div>
    </div>
  );
}
