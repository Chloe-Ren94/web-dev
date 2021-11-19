import posts from './data/posts.json';
const tweets = (state = posts, action) => {
    switch (action.type) {
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
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatarIcon": "/images/react-blue.png",
                "logo-image": "/images/react-blue.png",
                "reply": 123,
                "retweet": 234,
                "like": 345,
                "liked": false
            };
            return (
                [
                    tweet,
                    ...state,
                ]
            );
            break;
        default:
            return(state);
    }
};
export default tweets;