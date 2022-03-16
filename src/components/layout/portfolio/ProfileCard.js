
import styled from 'styled-components';
import {
    Card,
} from 'react-bootstrap';
import pdfResume from '../../../downloads/cv.pdf';


const CardContainer = styled(Card)`
    width: 18rem;
    margin: 0 auto;
    text-align:center;
`

const LinkedinLink = styled(Card.Link)`
    display:block;
    width:100%;
    text-align:center;
    margin-left:0!important;
    margin-top:1rem;
    background-color:#0a66c2;
    color: #fff;
    text-decoration:none;   
    padding: 0.375rem 0.75rem;
    border: 2px solid #0755a3;
    font-size: 1rem;
    border-radius: 0.25rem;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    &:hover {
        border: 2px solid #0a66c2;
        background-color: #0755a3;
        color:#FFF;
        -moz-transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        -o-transform: translateY(-2px);
        -ms-transform: translateY(-2px);
        transform: translateY(-2px);
    }
`

const DownloadCurriculum = styled(LinkedinLink)`
    margin-top:3rem;
    background-color:transparent;
    color: #4caf50;
    border: 2px solid #4caf50;
    &:hover {
        color: white;
        background-color:#4caf50;
        border: 2px solid #4caf50;
        -moz-transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        -o-transform: translateY(-2px);
        -ms-transform: translateY(-2px);
        transform: translateY(-2px);
    }
`

const ProfileCard = () => {
    return (
        <CardContainer>
            <CardContainer.Body>
                <CardContainer.Title>Perfil de trabajo</CardContainer.Title>
                <CardContainer.Subtitle className="mb-2 text-muted">Juan Martín Domínguez</CardContainer.Subtitle>
                <DownloadCurriculum  href={pdfResume} target="_blank">Descargar Curriculum</DownloadCurriculum>
                <LinkedinLink href="https://www.linkedin.com/in/juan-dominguez/" target="_blank">Ver Linkedin</LinkedinLink>
            </CardContainer.Body>
        </CardContainer>
    )
}
export default ProfileCard;