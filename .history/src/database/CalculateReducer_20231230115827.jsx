import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {}
    switch (type) {
        case "display":
            if(state.display === '0') return payload
            return { display: payload, waitingToOperand: true};
        case "operation":
            return ({operation: payload, waitingToOperand: false})
        default:
            return state
    }
}
export default calculatorReducer