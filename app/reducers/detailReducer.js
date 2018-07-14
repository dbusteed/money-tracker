const initialState = {
    isComputing: true,
    data: []
}

export function details(state=initialState, action) {
    console.log('inside reducer')
    switch(action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                isComputing: true,
                data: []
            }
        case 'GET_DETAILS_SUCCESS':
            return {
                ...state,
                isComputing: false,
                data: action.data
            }
        default:
            return state
    }
}