const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row pe-xl-3 pe-xxl-0">
                <div class="col-2">
                    <img class="wd-img-size-2" src=${who.avatarIcon}/>
                </div>
                <div class="col-lg-6 col-xl-7 ps-3 pe-0 text-nowrap wd-zindex-front">
                    <div>
                        <span class="wd-font-bold">${who.userName}</span>
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-lg-4 col-xl-3 align-self-center">
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;