import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({calculate: payload})
        case "display":
            return ({display: payload})
        case "operation":
            return ({calculate: payload})
        case "waitingForOperand":
            return ({calculate: payload})
        default:
            return state
    }
}
export default calculatorReducer