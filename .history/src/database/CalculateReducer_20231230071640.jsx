import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state, calculate: payload})
        default:
            return state
    }
}
export default calculatorReducer