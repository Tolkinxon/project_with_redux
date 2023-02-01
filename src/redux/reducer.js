
const initialState = {
  news: [],
  newsLoadingStatus: 'tolkinxon',
  filters: [],
  id: 0,
  header: '',
  description: '',
  category: '',
  increment: 0,
  filter: 'all'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_FETCHING':
      return {
        ...state,
        newsLoadingStatus: 'loading',
      }
    case 'NEWS_FETCHED':
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: 'tolkinxon',
      }
    case 'NEWS_FETCHING_ERROR':
      return {
        ...state,
        newsLoadingStatus: 'error',
      }
    case 'HEADER':
      return {
        ...state,
        header: action.payload,
      }
    case 'DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      }
    case 'CATEGORY':
      return {
        ...state,
        category: action.payload,
      }
    case 'INCREMENT':
      return {
        ...state,
        increment: state.increment + 1
      }
    case 'FILTER':
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}

export default reducer
