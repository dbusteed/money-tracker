export function newIncome(data) {
    console.log('inside new Income action')
    return {
        type: 'NEW_INCOME',
        data
    }
}

export function newExpense(data) {
    console.log('inside new expense action')
    return {
        type: 'NEW_EXPENSE',
        data
    }
}