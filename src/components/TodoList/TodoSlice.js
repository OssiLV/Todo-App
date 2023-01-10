const initState = [
    { id: 1, name: 'learn yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'learn JS', completed: false, priority: 'Low' },
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];

        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default todoListReducer;