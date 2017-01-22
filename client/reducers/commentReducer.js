export default function comments(state = [], action) {

    switch (action.type) {
        case 'ADD_COMMENT':
            const newComments = addNewComment(state[action.postCode], action);
            let newState = {
                ...state,
                [action.postCode]: newComments
            };
            return newState
            break;

        case 'REMOVE_COMMENT':
            const updatedComments = removeComment(state[action.postCode], action.i)
            return {
                ...state,
                updatedComments
            };
            break;

        default:
            return state;
    }

    //helper functions
    function addNewComment(postComments = [], action) {
        postComments.push({text: action.comment, user: action.author});
        return postComments;
    }

    function removeComment(commentsArray, index) {
        return commentsArray.splice(index, 1);
    }
}
