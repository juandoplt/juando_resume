import { motion } from 'framer-motion';

const Animation = ({
    children,
    initial = { opacity: 0, y: 200 },
    animate = { opacity: 1, y: 0 },
    transition = 0.75
}) => {
    
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: transition }}
        >
            {children}
        </motion.div>
    );
}

export default Animation;
