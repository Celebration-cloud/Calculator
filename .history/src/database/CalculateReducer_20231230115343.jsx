import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "display":
            return ({display: payload})
        case "operation":
            return ({operation: payload, wai})
        default:
            return state
    }
}
export default calculatorReducer