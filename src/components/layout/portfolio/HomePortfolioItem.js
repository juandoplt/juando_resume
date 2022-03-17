
import styled from 'styled-components';
import { Link } from "react-router-dom";


const HomePortfolioItem = styled(Link)`
        background-image: ${props => props.size || ""};
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 390px
    `;

export default HomePortfolioItem;
