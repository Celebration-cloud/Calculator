import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {display}= state
    switch (type) {
        case "display":
            if(state.display === '0'){
                return {display: `$`}
            }
            return { display: `${display}${payload}`, waitingToOperand: true};
        case "operation":
            if(state.waitingForOperand === true) return
                return {
                  operation: `${payload}`,
                  display: `${display}${payload}`,
                  waitingToOperand: false,
                };
        case 'equal':
            return {display: eval(display)}
        case 'reset':
            return { display: "0", operation: "", waitingForOperand: false }
        default:
            return state
    }
}
export default calculatorReducer