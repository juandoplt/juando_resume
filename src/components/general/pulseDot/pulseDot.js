import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Pulse, Dot } from "./pulseDot.styles";

const PulseDot = ({
    height,
    width,
    top,
    left,
    right,
    bottom,
}) => {
    return (
        <>
            <Pulse
                whileInView={{ scale: [0, 1.3], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .2 }}
                viewport={{ once: true }}
                top={top}
                left={left}
                right={right}
                bottom={bottom}
            />
            <Dot
                whileInView={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .3 }}
                viewport={{ once: true }}
                top={top}
                left={left}
                right={right}
                bottom={bottom}
            />
        </>
    )
}

export default PulseDot;