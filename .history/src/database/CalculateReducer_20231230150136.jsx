import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {display}= state
    switch (type) {
      case "display":
        if (state.display === "0") {
          return { display: payload, waitingForOperand: true };
        }else{
            return { display: `${display}${payload}`, waitingToOperand: true };
        }
      case "operation":
        if (state.waitingForOperand) {
          return {
            operation: `${payload}`,
            display: `${display}${payload}`,
            waitingToOperand: false,
          }
          } else {
            return {
              ...state, display: display,
              waitingForOperand: true
            }
        }
          
      case "equal":
        return { display: eval(display) };
      case 'delete':
        return {...state, display:  display.toString().slice(0, -1)}
      case "reset":
        return { display: "0", operation: "", waitingForOperand: false };
      default:
        return state;
    }
}
export default calculatorReducer