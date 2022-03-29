import { Pulse, Dot } from "./pulseDot.styles";

const PulseDot = ({
    size,
    top,
    left,
    right,
    color,
    bottom,
}) => {
    return (
        <div style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            height: size,
            width: size,
        }}>
            <Pulse
                whileInView={{ scale: [0, 1.4], opacity: [.8, .1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .5 }}
                viewport={{ once: true }}
                color={color}
            />
            <Pulse
                whileInView={{ scale: [0, 1.2], opacity: [1, .1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .2 }}
                viewport={{ once: true }}
                color={color}
            />
            <Dot
                whileInView={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .3 }}
                viewport={{ once: true }}
                color={color}
            />
        </div>
    )
}

export default PulseDot;