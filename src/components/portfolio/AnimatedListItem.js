import { motion } from "framer-motion"
import styled from 'styled-components'

const ToolsListItem = styled.li`
  margin: 0.5rem;
`

const ToolsListItemLabel = styled.span`
  font-size: .8rem;
  display: block;
  color: #fff;
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
                    opacity: 1,
                    scale: [0, 1.2, 1],
                    background: ["rgb(103,58,183)", "rgb(0,0,0)"],
                }}
                transition={{ duration: .5, delay }}
                style={{ opacity: 0, borderRadius: "10px" }}
                viewport={{ once: true }}
            >
                <ToolsListItemLabel>{text}</ToolsListItemLabel>
            </motion.div>
        </ToolsListItem>
    );
}

export default AnimatedListItem;


