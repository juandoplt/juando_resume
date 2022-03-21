import styled from 'styled-components'
import { motion } from "framer-motion";

const Image = styled.img`
  width:52px;
  height:52px;
  border-radius:50%;
`

const Link = styled.a`
  width: 52px;
  overflow: hidden;
  display:block;
  &:hover{
    cursor:pointer;
  }
`

export const PlayIcon = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
  >
    <Link onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" />
      </svg>
    </Link>
  </motion.div>
);

export const PauseIcon = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
  >
    <Link onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z" />
      </svg>
    </Link>
  </motion.div>
);

export const Icon = ({ onClick, image, id, playing,stopped }) => {
  const variants = {
    active: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 2,
        repeatType: 'loop',
        ease: "linear",
        repeatDelay: 0,
      }
    },
    inactive: {
      transition: { duration: 2 }
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
    >
      <motion.div
        variants={variants} animate={id == playing && stopped ? "active" : "inactive"}
      >
        <Link onClick={onClick}>
          <Image src={require(`../../../assets/images/${image}.png`)} />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export const DiscoIcon = ({ onClick, image, lights }) => {
  const variants = {
    active: {
      scale: [1.2,1,1.2],
      transition: {
        type:"spring",
        repeat: Infinity,
        duration: .5,
        repeatDelay: 0,
      }
    },
    inactive: {
      transition: { duration: 2 }
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <motion.div
        variants={variants} animate={lights ? "active" : "inactive"}
      >
        <Link onClick={onClick}>
          <Image src={require(`../../../assets/images/${image}.png`)} />
        </Link>
      </motion.div>
    </motion.div>
  )
}