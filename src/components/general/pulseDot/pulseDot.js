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
                whileInView={{ scale: [0, 1.3], opacity: [.8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .4 }}
                viewport={{ once: true }}
                color={color}
            />
            <Pulse
                whileInView={{ scale: [0, 1.3], opacity: [1, 0] }}
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