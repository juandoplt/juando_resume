
import styled from 'styled-components';
import {
    Card,
} from 'react-bootstrap';

const CardContainer = styled(Card)`
    width: 18rem;
    margin: 0 auto
`

const CardLink = styled(Card.Link)`
    display:block;
    width:100%;
    text-align:center;
    margin-left:0!important;
    margin:1rem 0;
`

const ProfileCard = () => {
    return (
        <CardContainer>
            <CardContainer.Body>
                <CardContainer.Title>Perfil de trabajo</CardContainer.Title>
                <CardContainer.Subtitle className="mb-2 text-muted">Juan Martín Domínguez</CardContainer.Subtitle>
                <CardLink href="#">Descargar Curriculum</CardLink>
                <CardLink href="#">Ver Linkedin</CardLink>
            </CardContainer.Body>
        </CardContainer>
    )
}
export default ProfileCard;