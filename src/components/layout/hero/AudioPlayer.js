import { useAudio } from "react-awesome-audio";
import styled from "styled-components";
import SoundOn from '../../../assets/images/volume-high.svg';
import SoundOff from '../../../assets/images/volume-mute.svg';

const SoundControl = styled.img`
    max-width:35px;
`;

const AudioPlayer = ({ song }) => {
  const { isPlaying, play, pause, toggle } = useAudio({
    src: require(`../../../assets/sounds/${song}.mp3`),
    loop: true,
  });

  return (
    <div>
      <a href="#" onClick={toggle}>
        <SoundControl src={isPlaying ? SoundOff : SoundOn} alt="Control de música" />
      </a>
    </div>
  );
}

export default AudioPlayer;
