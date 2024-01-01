import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({calculate: payload})
        case "display":
            return ({display: payload})
        case "operation":
            return ({operation: payload})
        case "waitingForOperand":
            return ({waiting: payload})
        default:
            return state
    }
}
export default calculatorReducer