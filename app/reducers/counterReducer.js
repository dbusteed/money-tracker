export const initalState = {
    count: 0
}

export function counter(state=initalState, action) {
    switch(action.type) {
        case 'UP':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DOWN':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}