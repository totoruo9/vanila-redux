import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreatetors } from "../store";

const Detail = ({toDo, onClickDelete}) => {
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Create at: {toDo?.id}</h5>
            <Link onClick={onClickDelete} to={"/"}>DEL</Link>
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    const {match: { params: {id} } } = ownProps;
    return {toDo: state.find(toDo => parseInt(toDo.id) === parseInt(id))};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {match: { params: {id} } } = ownProps;
    
    return {
        onClickDelete: () => dispatch(actionCreatetors.deleteToDo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);