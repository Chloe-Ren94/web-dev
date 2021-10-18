import posts from './posts.js';
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = (sideBar) => {
    return(`
        <ul class="list-group">
            ${
                posts.map(post => {
                    return(PostSummaryItem(post, sideBar));
                }).join('')
            }
        </ul>
    `);
}
export default PostSummaryList;