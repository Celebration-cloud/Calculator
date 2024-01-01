import calculator from "./InitialState"
const calculatorReducer = (state = calculator, {type, payload}) => {
    const { display, waitingToOperand } = state;
    
    switch (type) {
      case "display":
        if(display === '0') return {display: `${payload}`}
        if(display.startsWith('00' && '0') ) return {display: '0'}
          return { display: `${display}${payload}`, waitingToOperand: true };
      case "operation":
        if (waitingToOperand === false) return state;
          return {
            operation: `${payload}`,
            display: `${display}${payload}`,
            waitingToOperand: false,
          }
          
      case "equal":
        return { display: `${eval(display)}` };
      case 'delete':
        
        return {...state, display:  display.toString().slice(0, -1)}
        
      case "reset":
        return { display: '0', operation: "", waitingForOperand: false };
      default:
        return state;
    }
}
export default calculatorReducer