import React, { useState } from 'react';
import { motion, useCycle } from "framer-motion";
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/animations/salute.json';
import {
  PlayIcon,
  PauseIcon,
  Icon,
  DiscoIcon,

} from '../../layout/hero/PlayerIcons';

import { Reaplay } from "reaplay";
import styled from 'styled-components';

const PlayerContent = styled.div`
    display:flex;
    flex-wrap:wrap;
    overflow:visible;
    `

const Playlist = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%
`

const MetaDataContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
      margin:1rem 0;
      text-align:center;
    p{
      margin:0;
      font-size:.7rem
    }
    p:first-child{
      font-weight:900;
    }
`

const LeftLight = styled.div`
    clip-path: polygon(90% 0, 100% 1%, 100% 100%, 0% 100%);
    background: linear-gradient(to bottom,  rgba(177,48,242,1) 0%,rgba(183,123,229,0) 100%);
    height: 27em;
    width: 16em;
    z-index: 3;
    top: -180px;
    left: -10px;
    position: absolute;
    animation: flash linear 1s infinite;
    animation-play-state: paused;
    transform: rotate(195deg);
    @media (min-width: 576px) { 
      transform: rotate(-25deg);
      left: -50px;
    }
`

const RightLight = styled(LeftLight)`
    left: auto;
    right: -70px;
    clip-path: polygon(33% 1%, 49% 0, 100% 100%, 0% 100%);
    background: linear-gradient(to bottom,  rgba(50,153,255,1) 0%,rgba(134,130,242,0) 100%);
    transform: rotate(158deg);
    @media (min-width: 576px) { 
      transform: rotate(25deg);
      right: -50px;
    }
`

const Morty = styled.div`
    max-width:60%;
    margin:0 auto;
    flex-direction:column
    @media (min-width: 576px) { 
    }
`

const PlayerContainer = styled(motion.div)`
    margin:0 auto;
    width:350px;
    margin-top: 10px; 
    padding-top: 10px;
    @media (min-width: 576px) { 
      width:400px;
    }
`
const AnimatedLight = styled(motion.div)`
    z-index: 2;
    position: relative;
`



const Player = ({ mortyDance }) => {
  const [lights, setLights] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    controls: false,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const songList = [
    require(`../../../assets/sounds/xfiles.mp3`), //local song
    require(`../../../assets/sounds/beeges.mp3`), //local song
    require(`../../../assets/sounds/daftpunk.mp3`), //local song
    require(`../../../assets/sounds/erotic.mp3`), //local song
  ]

  const turnLights = () => {
    setLights(!lights)
  }

  const sidebar = {
    open: () => ({
      height: "130px",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        restDelta: 2
      }
    }),
    closed: {
      opacity: 0,
      height: "0px",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 500,
        damping: 40
      }
    }
  };

  return (
    <>

      {lights &&
        <>
          <AnimatedLight
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: .5, delay: .2 }}
          >
            <LeftLight />
          </AnimatedLight>
          <AnimatedLight
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: .5 }}
          >
            <RightLight />
          </AnimatedLight>
        </>
      }
      <Morty>
        <Lottie
          options={defaultOptions}
          style={{
            pointerEvents: "none",
          }}
        />
      </Morty>

      <PlayerContainer
        initial={false}
        animate={mortyDance ? "open" : "closed"}
        variants={sidebar}
      >
        <Reaplay tracks={songList} startIndex={0}>
          {(player) => {
            return (
              <PlayerContent>
                <Playlist>
                  <DiscoIcon onClick={() => turnLights()} image="disco" lights={lights} />
                  <Icon onClick={() => player.setTrackIndex(0)} image="xfiles" id={0} stopped={player.isPlaying} playing={player.trackIndex} />
                  <Icon onClick={() => player.setTrackIndex(1)} image="beegees" id={1} stopped={player.isPlaying} playing={player.trackIndex} />
                  <Icon onClick={() => player.setTrackIndex(2)} image="daftpunk" id={2} stopped={player.isPlaying} playing={player.trackIndex} />
                  <Icon onClick={() => player.setTrackIndex(3)} image="maddonna" id={3} stopped={player.isPlaying} playing={player.trackIndex} />
                  {player.isPlaying ? (
                    <PauseIcon onClick={() => player.setIsPlaying(false)} />
                  ) : (
                    <PlayIcon onClick={() => player.setIsPlaying(true)} />
                  )}
                </Playlist>
                <MetaDataContainer>
                  <p>{metaData[player.trackIndex].name}</p>
                  <p>{metaData[player.trackIndex].artist}</p>
                </MetaDataContainer>
              </PlayerContent>
            );
          }
          }
        </Reaplay>
      </PlayerContainer>


    </>
  )
};
const metaData = [
  {
    name: "Soundtrack",
    artist: "X Files"
  },
  {
    name: "You should be dancing",
    artist: "Beegees"
  },
  {
    name: "Around the world",
    artist: "Daft Punk"
  },
  {
    name: "Erotic",
    artist: "Maddonna"
  },
];

export default Player;