import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "add";
const MINUS = "minus"

const countModifier = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type:ADD});
}
const handleMiuns = () => {
  countStore.dispatch({type:MINUS});
}

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMiuns);