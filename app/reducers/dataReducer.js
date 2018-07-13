export const initialState = {
    incomes: [],
    expenses: []
}

export function addData(state=initialState, action) {
    switch(action.type) {
        case 'NEW_INCOME':
            return {
                ...state,
                incomes: [
                    ...state.incomes,
                    action.data
                ]
            }
        case 'NEW_EXPENSE':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.data
                ]
            }
        default:
            return state
    }
}