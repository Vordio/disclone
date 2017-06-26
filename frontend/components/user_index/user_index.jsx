import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

   componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
  }

  render () {
    let users = this.props.users;
    let userArray = this.props.server.users
    if (Object.keys(users).length > 0) { 
    return (
      <div className='user-index-container'>
        <ul className='user-index'>
          {userArray.map(key => {
            return (
            <li className='user-index-item'>
              <div className='user-avatar-wrapper circle-base'>
                <img src={users[key].avatarUrl} alt=""/>
              </div>
              <div className="index-username-control">
                <span className='index-username'>{users[key].username}</span>
              </div>
            </li>
            )}
          )}
        </ul>
      </div>
    );
    } else return null;
  };
}


//////////////  CONTAINER ///////////
import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions.js'
// import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ servers, users }, ownProps) => {
  
  return {
    server: servers[ownProps.match.params.serverId],
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)), 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);