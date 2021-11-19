const profileData = {
    name: 'Ice Bear', handle: 'icebear',
    tweets: 1984,
    profilePicture: '/images/profile.png', bannerPicture: '/images/banner.jpg',
    bio: `Looking for rich European women at the edge of the world`,
    location: 'Zurich, Switzerland', website: '', dateOfBirth: '6/4/1989', dateJoined: '1/2019',
    followingCount: 312, followersCount: 180,
    edit: false
}

const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'click-edit':
            return {
                ...state,
                edit: true
            }
        case 'click-save':
            return {
                ...action.profile,
                edit: false
            }
        case 'click-cancel':
            return {
                ...state,
                edit: false
            }
        default:
            return state
    }
}
export default profile;