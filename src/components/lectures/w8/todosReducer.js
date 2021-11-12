const data = [
    {id: '123', do: 'Walk dogs', done: false},
    {id: '234', do: 'Buy milk', done: false},
];

const todosReducer = (state = data, action) => {
    switch (action.type) {
        case 'create-todo':
            return [
                ...state,
                {
                    id: (new Date()).getTime() + '',
                    ...action.todo
                }
            ]
            break;
        case 'delete-todo':
            return state.filter((todo) => todo !== action.todo);
            break;
        case 'update-todo':
            break;
        default:
            return state;
    }
}
export default todosReducer;