import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "display":
            if(state.display === '0') r
            return { display: payload, waitingToOperand: true};
        case "operation":
            return ({operation: payload, waitingToOperand: false})
        default:
            return state
    }
}
export default calculatorReducer