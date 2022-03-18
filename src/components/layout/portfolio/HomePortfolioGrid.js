import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
import { Paragraph, Title } from '../../text';
import Section from '../../general/Section';
import Separator from '../../general/Separator';
import HomeGridItem from './HomeGridItem';

const FirstTitle = styled(Title)`
    margin-bottom: 3rem;
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
            <Separator fill="white" backgroundColor="#212529" />
            <Section paddingBottom="5%" paddingTop="5%" backgroundColor="#212529">
                <Container>
                    <Row>
                        <FirstTitle textAlign="center" color="#fff" textTransform="uppercase" size="2.5rem">Mi experiencia</FirstTitle>
                        <HomeGridItem
                            to="/fpd"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_fpd.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/fpd_logo.png'}`}
                        />
                        <HomeGridItem
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_ladder.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/ladder_logo.png'}`}
                            marginBottom="1.5"
                        />
                        <HomeGridItem
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_playgames.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/playgames_logo.png'}`}
                        />
                        <HomeGridItem
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_mastenis.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/mastenis_logo.png'}`}
                        />
                    </Row>
                </Container>
            </Section>
        </>
    );
}

export default HomePortfolioGrid;