import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodosContainer extends Component {

    render(){
        return(
            <idv></idv>
        );
    }
};

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);