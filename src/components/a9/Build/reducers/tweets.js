const tweets = (state = [], action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(action.tweets)
            break;
        case 'like-tweet':
            return (
                state.map(tweet => {
                    if (tweet._id === action.tweet._id) {
                        if (tweet.liked) {
                            tweet.liked = false;
                            tweet.like--;
                        } else {
                            tweet.liked = true;
                            tweet.like++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            )
        case 'delete-tweet':
            return (
                state.filter(tweet => tweet._id !== action.tweet._id)
            )
            break;
        case 'create-tweet':
            return (
                [
                    action.tweet,
                    ...state,
                ]
            );
            break;
        default:
            return(state);
    }
};
export default tweets;