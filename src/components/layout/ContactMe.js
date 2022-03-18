import { motion } from 'framer-motion';

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
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .8 }}
                            viewport={{ once: true }}
                        >
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
                        </motion.div>

                    </Col>
                </Row>
            </Section>
        </>
    );
}

export default ContactMe;