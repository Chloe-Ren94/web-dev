const profile = (state = {}, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profile;
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