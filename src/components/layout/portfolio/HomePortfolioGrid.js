import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Paragraph, Title } from '../../text';

const Section = styled.div`
    padding-top:6rem;
    padding-bottom:5rem;
    background: #212529;
`
const FirstTitle = styled(Title)`
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    color:#fff;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
    }
`


const HomePortfolioGrid = () => {
    return (
        <>
            <div className="custom-shape-divider-top-1646170831" style={{ background: "#212529" }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ fill: "white" }}>
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                </svg>
            </div>
            <Section className="portfolioGrid">
                <Container>
                    <Row>
                    <FirstTitle textAlign="center">Mi experiencia</FirstTitle>

                        <Col lg={6} style={{ paddingBottom: 12 }}>
                            <Link to="/fpd" className="nav-link" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background_fpd.jpg'})`,
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "390px"
                            }}>
                                <img src={`${process.env.PUBLIC_URL + '/img/fpd_logo.png'}`} style={{ maxWidth: "26%" }} />
                            </Link>
                        </Col>
                        <Col lg={6} style={{ paddingBottom: 12 }}>
                            <Link to="/laddercup" className="nav-link" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background_ladder.jpg'})`,
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "390px"
                            }}>
                                <img src={`${process.env.PUBLIC_URL + '/img/ladder_logo.png'}`} style={{ maxWidth: "26%" }} />
                            </Link>
                        </Col>
                        <Col lg={6} style={{ paddingBottom: 12, paddingTop: 12 }}>
                            <Link to="/playgames" className="nav-link" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background_playgames.jpg'})`,
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "390px"
                            }}>
                                <img src={`${process.env.PUBLIC_URL + '/img/playgames_logo.png'}`} style={{ maxWidth: "26%" }} />
                            </Link>
                        </Col>
                        <Col lg={6} style={{ paddingBottom: 12, paddingTop: 12 }}>
                            <Link to="/mastenis" className="nav-link" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background_mastenis.jpg'})`,
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "390px"
                            }}>
                                <img src={`${process.env.PUBLIC_URL + '/img/mastenis_logo.png'}`} style={{ maxWidth: "26%" }} />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    );
}

export default HomePortfolioGrid;