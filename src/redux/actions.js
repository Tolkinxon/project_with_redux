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

export const headerF = (e) => {
    return{
        type: 'HEADER',
        payload: e
    }
} 
export const categoryF = (e) => {
    return{
        type: 'CATEGORY',
        payload: e
    }
} 
export const descriptionF = (e) => {
    return{
        type: 'DESCRIPTION',
        payload: e
    }
} 

export const news3 = (filt) => {
    return {
        type: 'NEWS2',
        payload: filt
    }
}

export const filt = (item) => {
    return {
        type: 'FILTER',
        payload: item
    }
}


