export function increment(postCode){
  return {
    type: 'INCREMENT_LIKES',
    postCode
  };
}

export function addComment(postCode, author, comment){
  return {
    type: 'ADD_COMMENT',
    postCode,
    author,
    comment
  };
}

export function removeComment(postCode, i){
  return {
    type: 'REMOVE_COMMENT',
    postCode,
    i
  };
}
