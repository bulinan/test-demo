import { GET_SEARCH_RESULTS } from '@/store/actionTypes'
let defaultState = {
    searchResults: {}
}
export default (state = defaultState,action) => {
    console.log(action);
    switch (action.type){
        case GET_SEARCH_RESULTS:
            return Object.assign({},state,{
                searchResults: {...action.data}
            })
        default:
            return state;
    }
}