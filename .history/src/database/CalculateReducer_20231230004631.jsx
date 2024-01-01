import calculator from "./InitialState"

const name = (state = calculator, {type, payload}) => {
    switch (type) {
        case "re":
            return state
        default:
            return state
    }
}