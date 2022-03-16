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