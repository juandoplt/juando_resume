import React, { useState } from 'react';
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/animations/salute.json';
import {
  PlayIcon,
  PauseIcon,
  BeeGeesIcon,
  CircleIcon,
  DaftPunkIcon,
  MaddonnaIcon,
  XfilesIcon,
} from '../../layout/hero/PlayerIcons';

import { Reaplay } from "reaplay";
// import AudioPlayer from './AudioPlayer';
import styled from 'styled-components';

const PlayerContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    overflow:visible;
    `
    
    const PlaylistContainer = styled.div`
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




const Player = props => {
  const [lights, setLights] = useState(false);

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
    require(`../../../assets/sounds/beeges.mp3`), //local song
    require(`../../../assets/sounds/daftpunk.mp3`), //local song
    require(`../../../assets/sounds/other.mp3`), //local song
  ]

  const turnLights = () => {
    setLights(!lights)
  }

  return (
    <>

      {lights &&
        <>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: .5, delay: .2 }}
            style={{ zIndex: 2, position: "relative" }}
          >
            <div style={{
              height: "27em",
              width: "16em",
              zIndex: 3,
              top: -200,
              left: -50,
              position: "absolute",
              clipPath: "polygon(90% 0, 100% 1%, 100% 100%, 0% 100%)",
              background: "linear-gradient(to bottom,  rgba(177,48,242,1) 0%,rgba(183,123,229,0) 100%)",


              animation: "flash linear 1s infinite",
              animationPlayState: "paused",
              transform: "rotate(-25deg)"
            }}></div>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: .5 }}
            style={{ zIndex: 2, position: "relative" }}
          >
            <div style={{
              height: "27em",
              width: "16em",
              zIndex: 3,
              top: -200,
              right: -50,
              position: "absolute",
              clipPath: "polygon(33% 1%, 49% 0, 100% 100%, 0% 100%)",
              background: "linear-gradient(to bottom,  rgba(50,153,255,1) 0%,rgba(134,130,242,0) 100%)",
              animation: "flash linear 1s infinite",
              animationPlayState: "paused",
              transform: "rotate(25deg)"
            }}></div>
          </motion.div>
        </>
      }
      <Lottie
        options={defaultOptions}
        style={{
          pointerEvents: "none",
        }}
      />
      <Reaplay tracks={songList} startIndex={1}>
        {(player) => {
          console.log("player loading :", player.isLoading);

          return (
            <PlayerContainer>
              <PlaylistContainer>
                <CircleIcon onClick={() => turnLights()} fill="red" />
                <BeeGeesIcon onClick={() => player.setTrackIndex(0)} />
                <DaftPunkIcon onClick={() => player.setTrackIndex(1)} />
                <MaddonnaIcon onClick={() => player.setTrackIndex(1)} />
                <XfilesIcon onClick={() => player.setTrackIndex(1)} />
                {player.isPlaying ? (
                  <PauseIcon onClick={() => player.setIsPlaying(false)} />
                ) : (
                  <PlayIcon onClick={() => player.setIsPlaying(true)} />
                )}
              </PlaylistContainer>
              <MetaDataContainer>
                <p>{metaData[player.trackIndex].name}</p>
                <p>{metaData[player.trackIndex].artist}</p>
              </MetaDataContainer>
            </PlayerContainer>
          );
        }
        }
      </Reaplay>
    </>
  )
};
const metaData = [
  {
    name: "Song 1",
    artist: "SoundHelix 1"
  },
  {
    name: "Around the world",
    artist: "Daft Punk"
  },
  {
    name: "Song 3",
    artist: "SoundHelix 3"
  },
  {
    name: "Song 4",
    artist: "SoundHelix 4"
  },
  {
    name: "Song 5",
    artist: "SoundHelix 5"
  }
];

export default Player;