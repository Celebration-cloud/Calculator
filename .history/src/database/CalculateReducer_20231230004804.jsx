import calculator from "./InitialState"

const calculatorRe = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state, calculator: payload})
        default:
            return state
    }
}