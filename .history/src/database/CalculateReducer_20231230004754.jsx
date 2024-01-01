import calculator from "./InitialState"

const  = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state, calculator: payload})
        default:
            return state
    }
}