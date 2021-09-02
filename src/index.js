import {createStore} from "redux";

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD = "add";

let todoList = [];

const reducer = (todoList, action, a) => {
  console.log(a);
  switch(action.type){
    case ADD:
      return todoList.concat(action.payload);
    default:
      return todoList;
  }
}

const todoListStore = createStore(reducer);


todoListStore.replaceReducer((a,b) => {
  console.log(a, b);
});

todoListStore.dispatch({type:ADD, payload:"hellos"});


const listenSubScribe = () => {
  ul.innerHTML = todoList.map(todo => {
    console.log(todo)
    console.log(todoList);
    return <li>{todo.payload}</li>
  });
  console.log(todoListStore.getState())
}

todoListStore.subscribe(listenSubScribe);

let inputText = "";

const handleChange = (event) => {
  const {
    target: {value}
  } = event;
  inputText = value;
}

const handleSubmit = (event) => {
  event.preventDefault();
  todoListStore.dispatch({type: ADD, payload: inputText});
}

input.addEventListener("change", handleChange);
button.addEventListener("click", handleSubmit);

