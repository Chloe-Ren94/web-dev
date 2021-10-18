import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item wd-font-bold">Who to follow</li>
            ${
        who.map(user => {
            return (WhoToFollowListItem(user));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowList;