import { useSelector, useDispatch } from 'react-redux'
import useHttp from '../hook/useHttp'
import { useEffect } from 'react'
import { newsFetching, newsFetched, newsFetchingError } from '../redux/actions'
import Spinner from './Spinner'
import NewsListItem from './NewsListItem'
import { incr } from '../redux/actions'
import { useCallback } from 'react'

export default function NewsList() {
  const { news, news2, newsLoadingStatus, filter } = useSelector(
    (state) => state,
  )
  const dispatch = useDispatch()
  const { increment } = useSelector((state) => state)
  const { request } = useHttp()

  const delet = (id) => {
    request(`http://localhost:3001/news/${id}`, 'DELETE')

    dispatch(incr())
  }

  useEffect(() => {
    dispatch(newsFetching())
    fetch('http://localhost:3001/news')
      .then((data) => data.json())
      .then((data) => {
        const inform = data.filter((item) => {
          if (filter === 'all') {
            return true
          } else {
            return item.category === filter
          }
        })
        dispatch(newsFetched(inform))
      })
      .catch(() => dispatch(newsFetchingError()))


      dispatch(newsFetching())
      fetch('http://localhost:3001/news')
        .then((data) => data.json())
        .then((data) => {
          const inform = data.filter((item) => {
            if (filter === 'all') {
              return true
            } else {
              return item.category === filter
            }
          })
          dispatch(newsFetched(inform))
        })
        .catch(() => dispatch(newsFetchingError()))
  }, [increment])

  useEffect(() => {
    dispatch(newsFetching())
    fetch('http://localhost:3001/news')
      .then((data) => data.json())
      .then((data) => {
        const inform = data.filter((item) => {
          if (filter === 'all') {
            return true
          } else {
            return item.category === filter
          }
        })
        dispatch(newsFetched(inform))
      })
      .catch(() => dispatch(newsFetchingError()))
  }, [])
  console.log(news);

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
    return arr.map((item) => (
      <NewsListItem key={item.id} {...item} delet={delet} />
    ))
  }

  const element = renderNewsList(news)
  console.log('hello');

  return <ul className="">{element}</ul>
}
