const bankAccount = {
    name: 'Alice',
    balance: 321,
    dateOpened: '12/23/2020'
};

const bankAccountReducer = (state = bankAccount, action) => {
    switch (action.type) {
        case 'deposit':
            return {
                ...state,
                balance: state.balance + action.amount
            };
            break;
        case 'withdraw':
            return {
                ...state,
                balance: state.balance - action.amount
            };
            break;
        default:
            return state;
    }
}
export default bankAccountReducer;