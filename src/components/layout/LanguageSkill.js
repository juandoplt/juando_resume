import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
import { Paragraph, Title } from '../text';

const Section = styled.div`
    padding-top:6rem;
    padding-bottom:5rem;
    background: #000000;
`
const SpecialTitle = styled.h1`
    line-height: 5.5rem;
    font-size: 5rem;
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
    max-width:50%
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
            <div>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ background: "black" }}>
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: "#212529" }}></path>
                </svg>
            </div>
            <Section>
                <Container>
                    <Row>
                        <SpecialCol>
                            <SpecialTitle>
                                <Span>MI IDIOMA NATIVO ES </Span><SpanEffect>ESPAÑOL</SpanEffect><Span>, ALTHOUGH </Span><Span>I ALSO SPEAK AND WRITE </Span><SpanEffect>ENGLISH </SpanEffect><Span>FLUENTLY</Span>
                            </SpecialTitle>
                        </SpecialCol>
                    </Row>
                </Container>
            </Section>
            <div style={{ backgroundColor: "#e9ecef" }} >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                </svg>
            </div>
        </>
    );
}

export default LanguageSkill;