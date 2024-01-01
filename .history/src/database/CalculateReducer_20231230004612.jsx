import calculator from "./InitialState"

const name = (state = calculator, {type, payload}) => {
    switch (type) {
        case ACTION_TYPE_1:
            return state
        default:
            return state
    }
}