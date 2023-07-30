const INITIAL_STATE = { todos: [] };

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_DO":
      console.log("action", action);
      return { ...state, todos: [...state.todos, action.payload] };

    case "COMPLETE_TO_DO":
      const objectIdToRemove = action.id;
      return {
        ...state,
        todos: state.todos.filter((obj) => obj.id !== objectIdToRemove),
      };

    default:
      return state;
  }
}
