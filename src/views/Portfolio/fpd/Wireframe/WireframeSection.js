import { motion } from 'framer-motion';
import Parallax from '../../../../components/general/ParrallaxImages';
import {
    Image,
    AnimationContent,
    AnimationContainer,
    TitleContainer,
    SubTitle,
    Title
} from './WireframeSection.styles';


const WireframeSection = () => {

    return (
        <>
            <AnimationContainer>
                <TitleContainer>
                    <Title>La APP</Title>
                    <SubTitle>Esta app de fútbol consta de noticias, estadísticas de multiples ligas y también un PRODE, para realizar apuestas sobre los equipos por premios ofrecidos.</SubTitle>
                </TitleContainer>
                <AnimationContent>
                    <Parallax offset={-220}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-1.png'}`} />
                    </Parallax>
                    <Parallax offset={-230}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-2.png'}`} />
                    </Parallax>
                    <Parallax offset={-190}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-3.png'}`} />
                    </Parallax>
                    <Parallax offset={-205}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-4.png'}`} />
                    </Parallax>
                    <Parallax offset={-235}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-5.png'}`} />
                    </Parallax>
                    <Parallax offset={-195}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-6.png'}`} />
                    </Parallax>
                    <Parallax offset={-210}>
                        <Image src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-7.png'}`} />
                    </Parallax>
                </AnimationContent>
            </AnimationContainer>
        </>
    )
}

export default WireframeSection;