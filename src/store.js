import {createStore} from "redux";

const ADD = "ADD";
const DELETE = 'DELETE';

const addToDo = (text) => {
    return {
        type:ADD,
        text
    };
};

const deleteToDo = (id) => {
    return {
        type:DELETE,
        id:parseInt(id)
    }
}

const reducer = (state = [], action) => {
    if(localStorage.length === 0){
        localStorage.setItem("toDos", JSON.stringify([]));
    }
    switch(action.type){
        case ADD:
            const getStorageToDo = JSON.parse(localStorage.getItem("toDos"));
            const addStorage = getStorageToDo.concat({text: action.text, id: Date.now()});
            localStorage.setItem("toDos", JSON.stringify(addStorage));

            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            const todos = JSON.parse(localStorage.getItem("toDos"));
            const delStorage = todos.filter(todo => todo.id !== action.id);
            localStorage.setItem("toDos", JSON.stringify(delStorage));
            
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    };
};

const store = createStore(reducer);

export const actionCreatetors = {
    addToDo,
    deleteToDo
}
export default store;