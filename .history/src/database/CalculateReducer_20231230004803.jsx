import calculator from "./InitialState"

const calculator = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state, calculator: payload})
        default:
            return state
    }
}