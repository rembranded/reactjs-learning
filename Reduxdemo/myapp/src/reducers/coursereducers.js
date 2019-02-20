export default function courseReducers(state=[],action){
switch(action.type){
    case "CREATE_COURSE":
        return [...state,Object.assign({},action.course)];
    // case "REMOVE_COURSE":
    //     return state.map(course =>
    //         (course.title === action.course.title)
    //           ? {...todo, completed: !todo.completed}
    //           : todo
    //       )
    //    return [...state,Object.assign({},action.course)];
    
    default:
        return state;
}
}