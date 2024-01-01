import calculator from "./InitialState"

const calculatorReducer = (state = calculator, {type, payload}) => {
    switch (type) {
        case "result":
            return ({...state, calculat: payload})
        default:
            return state
    }
}
export default calculatorReducer