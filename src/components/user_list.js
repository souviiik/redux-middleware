import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
    componentWillMount(){
        this.props.fetchUsers();
    }

    renderUser(user) {
        return(
            <div className="col-md-4" key={user.id}>
                <div className="card card-block">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">{user.company.name}</p>
                    <a className="btn btn-primary" href="${user.website}">website</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);