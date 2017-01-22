function like_incrementer(oldState, postCode){
  let newState = oldState.map((post) => {
      if (post.code === postCode) {
          return Object.assign({}, post, {
              likes: post.likes + 1
          })
      } else {
          return post;
      }
  });
  return newState
}


export default function posts(state = [], action) {

    switch (action.type) {
        case 'INCREMENT_LIKES':
            return like_incrementer(state, action.postCode);
            break;
        default:
            return state;
    }
}
