import {createStore} from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = {text: action.text, id: Date.now()};
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleand = state.filter(todo => parseInt(todo.id) !== parseInt(action.id));
      return cleand;
    default:
      return state;
  }
};

const addToDo = (text) => {
  return {type: ADD_TODO, text}
}

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const deleteToDo = (id) => {
  return {type:DELETE_TODO, id}
}

const dispatchDeleteToDo = (event) => {
  const id = event.target.parentNode.id;
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.subscribe(paintToDos);



const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);