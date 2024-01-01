import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({calculate: payload})
        case "display":
            return ({calculate: payload})
        case "operation":
            return ({calculate: payload})
        case "result":
            return ({calculate: payload})
        default:
            return state
    }
}
export default calculatorReducer