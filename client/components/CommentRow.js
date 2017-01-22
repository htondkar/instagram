import React, {PropTypes} from 'react';

export default class CommentRow extends React.Component {

// constructor(){
//   super();
//   this.handleCommentRemove = this.handleCommentRemove.bind(this);
// }

  // this syntax is a fix for binding 'this'
  handleCommentRemove = () => {
    this.props.removeComment(this.props.postCode, this.props.index);
  };

  render() {
    return (
      <div className="comment">
        <p>
          <strong>{this.props.comment.user}</strong>
          {this.props.comment.text}
          <button className="remove-comment" onClick={this.handleCommentRemove}>&times;</button>
        </p>
      </div>
    );
  }
}

CommentRow.propTypes = {
};
