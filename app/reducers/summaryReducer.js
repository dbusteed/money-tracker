const initialState = {
    isComputing: true,
    data: {}
}

export function summary(state=initialState, action) {
    switch(action.type) {
        case 'MAKE_SUMMARY':
            return {
                ...state,
                isComputing: true,
                data: {}
            }
        case 'MAKE_SUMMARY_SUCCESS':
            return {
                ...state,
                isComputing: false,
                data: action.data
            }
        default:
            return state
    }
}