const PostSummaryItem = (post, sideBar) => {
    return(`
        <li class="list-group-item">
            <div class="row pe-5 pe-sm-5 pe-md-3 pe-lg-3 pe-xl-3 pe-xxl-0">
                ${
                    sideBar ? `<div class="col-9">` :
                        `<div class="col-10">`
                }
                    <div class="wd-fg-color-gray">${post.topic}</div>
                    <div>
                        <span class="wd-font-bold">${post.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <span class="wd-fg-color-gray"> - ${post.time}</span>
                    </div>
                    <div class="wd-font-bold">${post.title}</div>
                </div>
                ${
                    sideBar ? `<div class="col-3">` :
                        `<div class="col-2">`
                }
                    <img class="wd-img-size-1" src=${post.image}/>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;