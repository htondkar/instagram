import React, {PropTypes} from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {

  render() {
    return (
      <div className="photo-grid">
      {this.props.posts.map((post, i) => {
        return (
          <Photo post={post}
            actions={this.props.actions}
            key={i}
            index={i}
            comments={this.props.comments}
           />
        );
      })}
      </div>
    );
  }
}

PhotoGrid.propTypes = {
};
