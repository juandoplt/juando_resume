import { useState } from "react";
import ReactPlayer from 'react-player';

import Separator from "../../../../components/general/Separator";
import {
    ShowContainer,
    ShowTitle,
    ShowImage,
    ShowContent,
    ShowVideoContent,
    ShowContentDescription
} from "./ShowSection.styles";
import Parallax from '../../../../components/general/ParrallaxImages';
import { motion } from "framer-motion";



const ShowSection = () => {
    const [videoUrl, setVideoUrl] = useState();



    const thumbAnimation = {
        rest: {
            scale: .98,
            filter: "drop-shadow(0px 0px 1px rgba(33, 123, 207,0.15)",
            y:0,
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            scale: 1.1,
            filter: "drop-shadow(0px 0px 15px rgba(33, 123, 207,.6)",
            y:-10,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        }
    };


    return (
        <>
            <Separator fill="#efefef" backgroundColor="#010101" translateY="-1px" />
            <ShowContainer>
                <ShowTitle>Shows</ShowTitle>
                <ShowVideoContent>
                    <ReactPlayer
                        url={videoUrl}
                        className="react-player"
                        width="100%"
                        height="100%"
                    />
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_0.jpg'}`} />
                </ShowVideoContent>
                <ShowContent>

                    <motion.a
                        onClick={() => {
                            setVideoUrl('https://www.youtube.com/embed/NIKdwoldzIA')
                        }}
                        variants={thumbAnimation}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"                        >
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_1.jpg'}`} />
                    </motion.a>
                    <motion.a
                        onClick={() => {
                            setVideoUrl('https://www.youtube.com/embed/KZOQGWjlCp4')
                        }}
                        variants={thumbAnimation}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_2.jpg'}`} />
                    </motion.a>
                    <motion.a
                        onClick={() => {
                            setVideoUrl('https://www.youtube.com/embed/KSsuRn3DM68')
                        }}
                        variants={thumbAnimation}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_3.jpg'}`} />
                    </motion.a>
                    <motion.a
                        onClick={() => {
                            setVideoUrl('https://www.youtube.com/embed/6_3s3T7pORA')
                        }}
                        variants={thumbAnimation}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_4.jpg'}`} />
                    </motion.a>
                </ShowContent>
            </ShowContainer>
        </>
    )
}

export default ShowSection;