import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {display}= state
    switch (type) {
        case "display":
            if(state.display === '0') return payload
            return { display: `${display}${payload}`, waitingToOperand: true};
        case "operation":
            if(!state.waitingForOperand) return
                return ({operation: `${display} ${payload}`, waitingToOperand: false})
        case 'equal':
            return {display: eval(pay)}
        default:
            return state
    }
}
export default calculatorReducer