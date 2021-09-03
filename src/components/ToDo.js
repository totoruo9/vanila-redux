import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreatetors } from "../store";

const ToDo = ({text, onBtnClick, id}) => {
    return <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={onBtnClick}>DEL</button>
        </li>
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreatetors.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);