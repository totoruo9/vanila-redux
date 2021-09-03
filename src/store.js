import {createStore} from "redux";
import {createAction, createReducer} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     if(localStorage.length === 0){
//         localStorage.setItem("toDos", JSON.stringify([]));
//     }
//     switch(action.type){
//         case addToDo.type:
//             const getStorageToDo = JSON.parse(localStorage.getItem("toDos"));
//             const addStorage = getStorageToDo.concat({text: action.payload, id: Date.now()});
//             localStorage.setItem("toDos", JSON.stringify(addStorage));

//             return [{text: action.payload, id: Date.now()}, ...state];
//         case deleteToDo.type:
//             const todos = JSON.parse(localStorage.getItem("toDos"));
//             const delStorage = todos.filter(todo => todo.id !== action.payload);
//             localStorage.setItem("toDos", JSON.stringify(delStorage));
            
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     };
// };

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        const getStorageToDo = JSON.parse(localStorage.getItem("toDos"));
        const addStorage = getStorageToDo.concat({text: action.payload, id: Date.now()});
        localStorage.setItem("toDos", JSON.stringify(addStorage));
        state.push({text: action.payload, id: Date.now()});
    },
    [deleteToDo]: (state, action) => {
        const todos = JSON.parse(localStorage.getItem("toDos"));
        const delStorage = todos.filter(todo => todo.id !== action.payload);
        localStorage.setItem("toDos", JSON.stringify(delStorage));
        return state.filter(toDo => toDo.id !== action.payload);
    }
})

const store = createStore(reducer);

export const actionCreatetors = {
    addToDo,
    deleteToDo
}
export default store;