const initialState = {
  news: [],
  news2: [],
  newsLoadingStatus: 'tolkinxon',
  filters: [],
  id: 0,
  header: '',
  description: '',
  category: '',
  filter: 'all',
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
        news:
          action.payload.name === 'delete'
            ? [...action.payload.info]
            : [ ...action.payload.info, ...state.news],
        news2:
          action.payload.name === 'delete'
            ? [...action.payload.info]
            : [ ...action.payload.info, ...state.news],


        newsLoadingStatus: 'tolkinxon',
      }
    case 'NEWS2':
      return {
        ...state,
        news2: [...action.payload],
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

    case 'FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default reducer
