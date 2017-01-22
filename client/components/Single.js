import React, {PropTypes} from 'react';
import Photo from './Photo';
import Comments from './Comments';

// helper fuction
function findPost(posts, postCode) {
  return posts.filter((post)=>{return post.code == postCode})[0];
}

export default class Single extends React.Component {
  render() {
    const posts = this.props.posts;
    const postCode = this.props.params.postId
    const post = findPost(posts, postCode);
    const postComments = this.props.comments[postCode] || [];
    return (
      <div className="single-photo">
        <Photo post={post} actions={this.props.actions} comments={this.props.comments}/>
        <Comments comments={postComments} postCode={postCode} actions={this.props.actions}/>
      </div>
    );
  }
}

Single.propTypes = {
};
