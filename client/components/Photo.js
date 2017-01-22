import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends React.Component {

  render() {
    const post = this.props.post

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"></img>
          </Link>
          <ReactCSSTransitionGroup
            transitionName="likes"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span className="likes-heart" key={post.likes}>
              {post.likes}
            </span>
          </ReactCSSTransitionGroup>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes"
              onClick={()=>{this.props.actions.increment(post.code)}}>
                &hearts; {post.likes}
            </button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="speech-bubble"></span>
              <span className="comment-count">
                {this.props.comments[post.code] ? this.props.comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

Photo.propTypes = {
};
