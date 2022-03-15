import {
    Row,
    Container,
    Col
} from 'react-bootstrap';
import GhostButton from '../buttons/GhostButton';
import { Paragraph, Title, SubTitle } from '../text';
import ProfileCard from './portfolio/ProfileCard';


const ContactMe = () => {
    return (
        <Container className="portfolioGrid">
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
        </Container>
    );
}

export default ContactMe;