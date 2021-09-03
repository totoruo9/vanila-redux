import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreatetors } from "../store";

const Home = ({toDos, addToDo}) => {
    const [text, setText] = useState("");
    const onChange = (evnet) => {
        setText(evnet.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(text);
        setText("");
    };

    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write your todo list" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
            </ul>
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {toDos:state};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo: (text) => dispatch(actionCreatetors.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);