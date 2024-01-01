import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "display":
            return { display: payload, waitingToOperand: };
        case "operation":
            return ({operation: payload, waitingToOperand: false})
        default:
            return state
    }
}
export default calculatorReducer