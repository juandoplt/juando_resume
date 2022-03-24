import { motion } from "framer-motion"
import styled from 'styled-components'

const ToolsListItem = styled.li`
  margin: 0.5rem;
`

const ToolsListItemLabel = styled.span`
  font-size: .8rem;
  display: block;
  color: #000;
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
                whileInView={{
                    opacity: [0, 1],
                    scale: [0, 1.3, 1],
                    y: [1000, 0],
                    background: ["rgb(103,58,183)", "rgb(255,255,255)"],
                }}
                transition={{ type: "spring", duration: .5, delay }}
                style={{ borderRadius: "10px" }}
                viewport={{ once: true }}
            >
                <ToolsListItemLabel>{text}</ToolsListItemLabel>
            </motion.div>
        </ToolsListItem>
    );
}

export default AnimatedListItem;


