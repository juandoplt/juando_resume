import { motion } from 'framer-motion';

import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
import { Paragraph, Title } from '../text';
import Separator from '../general/Separator';

const Section = styled.div`
    padding-top:6rem;
    padding-bottom:5rem;
    background: #000000;
`
const SpecialTitle = styled.h1`
    line-height: 1.2;
    font-size: 3rem;
    letter-spacing: -2px;
    text-transform: uppercase;
    transform: skew(0deg,5deg);
    color: #fff;
    margin:0 auto;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    max-width: 100%;
    @media (min-width: 576px) { 
        max-width:50%;
        font-size: 5rem;
        line-height: 5.5rem;
    }
`
const Span = styled.span`
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
`
const SpanEffect = styled.b`
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
`

const SpecialCol = styled(Col)`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    &:hover{
        cursor:default
    }
    &:hover ${SpanEffect}{
        color:#a789dd;
        
    }
    &:hover ${Span} {
        opacity: .3;
        filter: blur(2px);
    }
`


const LanguageSkill = () => {
    return (
        <>
            <Separator fill="#212529" backgroundColor="black" />
            <Section>
                <Container>
                    <Row>
                        <SpecialCol>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: .4 }}
                                viewport={{ once: true }}
                            >
                                <SpecialTitle>
                                    <Span>MI IDIOMA NATIVO ES </Span><SpanEffect>ESPAÑOL</SpanEffect><Span>, ALTHOUGH </Span><Span>I ALSO SPEAK AND WRITE </Span><SpanEffect>ENGLISH </SpanEffect><Span>FLUENTLY</Span>
                                </SpecialTitle>
                            </motion.div>
                        </SpecialCol>
                    </Row>
                </Container>
            </Section>
            <Separator fill="black" backgroundColor="#e9ecef" />
        </>
    );
}

export default LanguageSkill;