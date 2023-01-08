const initState = {
    search: '',
    status: 'All',
    priority: [],
};

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state.filters,
                search: action.payload,
            };
        default:
            return state;
    }
};

export default filtersReducer;
