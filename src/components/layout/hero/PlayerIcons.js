import styled from 'styled-components'

const Image = styled.img`
  width:52px;
  height:52px;
  border-radius:50%;
`

export const PlayIcon = ({ onClick }) => (
  <a onClick={onClick} style={{ width: "52px", overflow: "hidden" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" />
    </svg>
  </a>
);

export const PauseIcon = ({ onClick }) => (
  <a onClick={onClick} style={{ width: "52px", overflow: "hidden" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z" />
    </svg>
  </a>
);

export const NextIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M400 64a16 16 0 00-16 16v136.43L151.23 77.11a35.13 35.13 0 00-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0035.77-.45L384 295.57V432a16 16 0 0032 0V80a16 16 0 00-16-16z" />
  </svg>
);

export const PrevIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z" />
  </svg>
);


export const CircleIcon = ({ onClick, fill }) => {
  return (
    <a onClick={onClick} style={{ width: "52px", overflow: "hidden" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill={fill} d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
      </svg>
    </a>
  )
}

export const XfilesIcon = ({ onClick }) => {

  return (
    <a onClick={onClick}>
      <Image src={require('../../../assets/images/xfiles.jpg')} />
    </a>
  )
}

export const MaddonnaIcon = ({ onClick }) => {

  return (
    <a onClick={onClick}>
      <Image src={require('../../../assets/images/maddonna.jpg')} />
    </a>
  )
}

export const DaftPunkIcon = ({ onClick }) => {

  return (
    <a onClick={onClick}>
      <Image src={require('../../../assets/images/daftpunk.jpg')} />
    </a>
  )
}

export const BeeGeesIcon = ({ onClick }) => {

  return (
    <a onClick={onClick}>
      <Image src={require('../../../assets/images/beegees.jpg')} />
    </a>
  )
}

