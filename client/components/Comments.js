import React, {PropTypes} from 'react';
import CommentRow from './CommentRow';

export default class Comments extends React.Component {

constructor(props){
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(e) {
    e.preventDefault();
    const postCode = this.props.postCode;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.actions.addComment(postCode, author, comment);
    this.refs.commentForm.reset();

  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map((comment, i)=>{
          return (
            <CommentRow
              key={i}
              index={i}
              comment={comment}
              removeComment={this.props.actions.removeComment}
              postCode={this.props.postCode}
            />
          );
        })}
        <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="author" ref="author"></input>
          <input type="text" placeholder="comment" ref="comment"></input>
          <input type="submit" hidden></input>
        </form>
      </div>
  );
  }
}

Comments.propTypes = {
};
