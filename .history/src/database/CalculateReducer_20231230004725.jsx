import calculator from "./InitialState"

const name = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({re})
        default:
            return state
    }
}