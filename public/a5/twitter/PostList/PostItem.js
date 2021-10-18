const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="wd-img-size-2" src=${post.avatarIcon}/>
                </div>
                <div class="col-11 ps-5 ps-sm-5 ps-md-4">
                    <div class="row">
                        <div class="col-11">
                           ${post.userName} <i class="fas fa-check-circle"></i>
                           <span class="wd-fg-color-gray">@${post.handle} · ${post.time}</span>
                        </div>
                        <div class="col-1">
                           <a href="#" class="wd-fg-color-gray"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                    </div>
                    <div>${post.post}</div>
                    <div class="border border-secondary wd-rounded-border mt-2">
                        <img class="wd-img-size-3" src=${post.image}/>
                        ${post.title === '' ? '' :
                            `<div class="p-3 border-top border-secondary">
                                <div>${post.title}</div>
                                <div class="wd-text">${post.text}</div>
                                <span class="wd-fg-color-gray"><i class="fas fa-link "></i> ${post.link}</span>
                            </div>`}
                    </div>
                    <div class="row mt-3">
                        <div class="col-3">
                            <a class="text-decoration-none wd-fg-color-gray" href="#">
                            <i class="far fa-comment me-2"></i>${post.reply}</a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none wd-fg-color-gray" href="#">
                            <i class="fas fa-retweet me-2"></i>${post.retweet}</a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none wd-fg-color-gray" href="#">
                            <i class="far fa-heart me-2"></i>${post.like}</a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none wd-fg-color-gray" href="#">
                            <i class="far fa-share-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem;