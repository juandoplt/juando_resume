import {
    Row,
    Container,
    Col
} from 'react-bootstrap';
import GhostButton from '../buttons/GhostButton';
import { Paragraph, Title, SubTitle } from '../text';
import ProfileCard from './portfolio/ProfileCard';
import styled from 'styled-components';

const Section = styled(Container)`
    padding-top:6rem;
    padding-bottom:10rem;
`

const ContactMe = () => {
    return (
        <>
            <div className="triangle-divider_software_bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{fill:"#8963e2"}}></path>
                </svg>
            </div>
            <Section>
                <Row>
                    <Col>
                        <Title textAlign="center">
                            GRACIAS POR VISITARME 😊
                        </Title>
                        <SubTitle textAlign="center">
                            Si queres contactarme
                        </SubTitle>
                        <Paragraph textAlign="center">
                            👇 👇 👇
                        </Paragraph>
                        <ProfileCard />
                    </Col>
                </Row>
            </Section>
        </>
    );
}

export default ContactMe;