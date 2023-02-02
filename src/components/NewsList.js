import { useSelector, useDispatch } from 'react-redux'
import useHttp from '../hook/useHttp'
import { useLayoutEffect, useMemo } from 'react'
import {
  newsFetching,
  newsFetched,
  newsFetchingError,
  news3,
} from '../redux/actions'
import Spinner from './Spinner'
import NewsListItem from './NewsListItem'
import { useCallback } from 'react'

export default function NewsList() {
  const { news, newsLoadingStatus, news2 } = useSelector((state) => state.news)
  const { filter } = useSelector((state) => state.obj)

  const dispatch = useDispatch()
  const { request } = useHttp()

  const delet = useCallback(
    (id) => {
      request(`http://localhost:3001/news/${id}`, 'DELETE')

      const inform = news.filter((item) => item.id !== id)
      const infor = inform
      dispatch(newsFetched({ info: infor, name: 'delete' }))
    },
    [news],
  )

  useLayoutEffect(() => {
    const inform = news.filter((item) => {
      if (filter === 'all') {
        return true
      } else {
        return item.category === filter
      }
    })
    dispatch(news3(inform))
  }, [filter])

  useLayoutEffect(() => {
    const inform = news.filter((item) => {
      if (filter === 'all') {
        return true
      } else {
        return item.category === filter
      }
    })
    dispatch(news3(inform))
  }, [delet])

  useLayoutEffect(() => {
    dispatch(newsFetching())
    fetch('http://localhost:3001/news')
      .then((data) => data.json())
      .then((data) => dispatch(newsFetched({ info: data, name: '' })))
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
    return arr.map((item) => (
      <NewsListItem key={item.id} {...item} delet={delet} />
    ))
  }

  if (filter === 'all') {
    const element = renderNewsList(news)
    return <ul className="">{element} </ul>
  } else {
    const element = renderNewsList(news2)
    return <ul className="">{element} </ul>
  }
}
