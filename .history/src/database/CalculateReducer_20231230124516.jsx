import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {display}= state
    switch (type) {
        case "display":
            if(state.display === '0'){
                return {display: `${payload}`}
            }
            return { display: `${display}${payload}`, waitingToOperand: true};
        case "operation":
            if(state.waitingForOperand){
return {
                  operation: `${payload}`,
                  display: `${display}${payload}`,
                  waitingToOperand: false,
                }
            }
            else{
                return
            }
                
        case 'equal':
            return {display: eval(display)}
        case 'reset':
            return { display: "0", operation: "", waitingForOperand: false }
        default:
            return state
    }
}
export default calculatorReducer