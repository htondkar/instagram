import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

/*
note: why React.cloneElement? because this is a contaienr component
and in order to pass every prop in this component to children we need
to clone them to be able to pass them props. they then will have access to store
*/
class Main extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">istagram</Link></h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return{
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
