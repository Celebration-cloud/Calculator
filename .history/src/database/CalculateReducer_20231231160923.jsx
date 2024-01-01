import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const {display}= state
    switch (type) {
      case "display":
          return { display: `${display}${payload}`, waitingToOperand: true };
      case "operation":
          return {
            operation: `${payload.operator}`,
            display: `${display}${payload.oper}`,
            waitingToOperand: payload.waiting,
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