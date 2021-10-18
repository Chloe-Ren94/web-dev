import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row pe-4 pe-sm-3 pe-md-2 pe-lg-2 pe-xl-2 pe-xxl-0">
            <div class="col-11">
                <div class="input-group wd-search-border wd-bg-color-white">
                    <i class="fas fa-search align-self-center ps-3"></i>
                    <input class="form-control" placeholder="Search Twitter"/>
                </div>
            </div>
            <div class="col-1 align-self-center">
                <a href="#"><i class="fas fa-cog fa-2x"></i></a>
            </div>
        </div>
        
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <div class="position-relative mt-2 mb-2">
            <img class="img-fluid" src="../../images/starship.jpg"/>
            <div class="wd-caption position-absolute start-0 bottom-0 ps-2 pb-1">SpaceX's Starship</div>
        </div>
        
        ${PostSummaryList(false)}
    `);
}
export default ExploreComponent;