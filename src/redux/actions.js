export const newsFetching = () => {
    return {
        type: 'NEWS_FETCHING',
    }
}

export const newsFetched = (arr) => {
    return { 
        type: 'NEWS_FETCHED',
        payload: arr
    }
}

export const newsFetchingError = () => {
    return {
        type: 'NEWS_FETCHING_ERROR',
    }
}