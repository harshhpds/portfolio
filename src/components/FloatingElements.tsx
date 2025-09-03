import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { icon: '⚡', delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', delay: 2, x: '80%', y: '30%' },
    { icon: '💡', delay: 4, x: '15%', y: '70%' },
    { icon: '🎯', delay: 1, x: '85%', y: '80%' },
    { icon: '⭐', delay: 3, x: '50%', y: '15%' },
    { icon: '🔥', delay: 5, x: '70%', y: '60%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
}