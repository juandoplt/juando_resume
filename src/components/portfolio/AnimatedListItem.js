import {
    Nav,
    Navbar,
    Container,
    NavDropdown,
} from 'react-bootstrap';
import { motion } from "framer-motion"
import styled from 'styled-components'

const ToolsListItem = styled.li`
  margin: 0.5rem;
`

const ToolsListItemLabel = styled.span`
  font-size: .8rem;
  display: block;
  background: #000;
  color: #fff;
  border-radius: 10px;
  padding: 0.1rem 0.8rem;
`

const AnimatedListItem = ({
    duration,
    delay,
    text,
    scale
}) => {
    return (
        <ToolsListItem>
            <motion.div
                animate={{ scale }}
                transition={{ duration, delay }}
            >
                <ToolsListItemLabel>{text}</ToolsListItemLabel>
            </motion.div>
        </ToolsListItem>
    );
}

export default AnimatedListItem;


