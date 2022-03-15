import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import { Link } from "react-router-dom";
import { Paragraph, Title } from "../../text";

const HomePortfolioGrid = () => {
    return (
        <Container className="portfolioGrid">
            <Row>
                <Title type="H1">
                    Mi experiencia
                </Title>
                <Col lg={6} style={{ paddingBottom: 12 }}>
                    <Link to="/fpd" className="nav-link" style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background_fpd.jpg'})`,
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "270px"
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
                        minHeight: "270px"
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
                        minHeight: "270px"
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
                        minHeight: "270px"
                    }}>
                        <img src={`${process.env.PUBLIC_URL + '/img/mastenis_logo.png'}`} style={{ maxWidth: "26%" }} />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePortfolioGrid;