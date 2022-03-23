const firstPhone = {
    x: [0, 20],
    y: [1000, 140],
    rotate: [10, -10],
    scale: [.4, .8]
}

const secondPhone = {
    x: [0, 0],
    y: [1000, 90],
    rotate: [15, 0],
    scale: [.4, .8]
}

const thirdPhone = {
    x: [0, -20],
    y: [1000, 140],
    rotate: [-5, 10],
    scale: [.4, .8]
}

const firstPhoneTransition = {
    type: "spring",
    stiffness: 0,
    duration: 4,
    delay: .4
}

const secondPhoneTransition = {
    type: "spring",
    stiffness: 0,
    duration: 4,
    delay: .2
}

const thirdPhoneTransition = {
    type: "spring",
    stiffness: 0,
    duration: 4,
    delay: .7
}

export {
    firstPhone,
    secondPhone,
    thirdPhone,
    firstPhoneTransition,
    secondPhoneTransition,
    thirdPhoneTransition,
}