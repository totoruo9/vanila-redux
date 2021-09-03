import { connect } from "react-redux";

const Detail = ({toDo}) => {
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Create at: {toDo?.id}</h5>
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    const {match: { params: {id} } } = ownProps;
    return {toDo: state.find(toDo => parseInt(toDo.id) === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);