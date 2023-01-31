import { useSelector, useDispatch } from 'react-redux'
import useHttp from '../hook/useHttp'
import { useEffect } from 'react'
import { newsFetching, newsFetched, newsFetchingError } from '../redux/actions'
import Spinner from './Spinner'
import NewsListItem from './NewsListItem'

export default function NewsList() {
  const { news, newsLoadingStatus } = useSelector((state) => state)
  const dispatch = useDispatch()

  const { request } = useHttp()

  console.log(news)

  useEffect(() => {
    dispatch(newsFetching())
    request('http://localhost:3001/news')
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()))
  }, [])

  if (newsLoadingStatus === 'loading') {
    return (
      <>
        <Spinner />
      </>
    )
  } else if (newsLoadingStatus === 'error') {
    return (
      <>
        <h1>Somethign went wrong</h1>
      </>
    )
  }

  const renderNewsList = (arr) => {
    if (news.length === 0) {
      return <h4 className="text-center mt5"> News don't exist </h4>
    } 
    return (
      arr.map(({id, ...props}) => (
        <NewsListItem key={id} {...props} />
      ))
    )
  }

  const element = renderNewsList(news)
  
  return (
    <ul>
      {element}
    </ul>
  )
}
