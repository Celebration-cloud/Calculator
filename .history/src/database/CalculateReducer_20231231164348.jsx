import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    const { display, operation } = state;
    switch (type) {
      case "display":
        if(display === "0") return {...state, display: payload}
          return { display: display === '0' ? `${pa}``${display}${payload}`, waitingToOperand: true};
      case "operation":
        if(operation) return state;
          return {
            operation: `${payload}`,
            display: `${display}${payload}`,
            waitingToOperand: false,
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