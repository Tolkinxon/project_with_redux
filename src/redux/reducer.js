const initialState = {
    news: [],
    newsLoadingStatus: 'tolkinxon',
    filters: []
}

const reducer = (state = initialState, action) => {
    // console.log(payload, 'hello');
    switch(action.type){
        case 'NEWS_FETCHING': 
            return{
                ...state,
                newsLoadingStatus: 'loading'
            }
        case 'NEWS_FETCHED': 
            return{
                ...state,
                news: action.payload,
                newsLoadingStatus: 'tolkinxon'
            }
        case 'NEWS_FETCHING_ERROR':
            return{
                ...state,
                newsLoadingStatus: 'error'
            }
        default:
            return state
    }
}

export default reducer