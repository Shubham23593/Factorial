import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Magnetic pull: the child drifts toward the cursor like a magnet,
   then springs home. Coarse pointers are ignored; degrades gracefully. */
const Magnetic = ({ children, strength = 0.3, className = "" }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 14, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 180, damping: 14, mass: 0.2 });

  const onMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) * strength);
    my.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
