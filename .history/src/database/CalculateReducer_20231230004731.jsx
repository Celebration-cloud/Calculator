import calculator from "./InitialState"

const name = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state})
        default:
            return state
    }
}