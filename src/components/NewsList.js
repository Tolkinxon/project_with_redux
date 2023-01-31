import { useSelector, useDispatch } from 'react-redux'
import useHttp from '../hook/useHttp'
import { useEffect } from 'react'
import { newsFetching, newsFetched, newsFetchingError } from '../redux/actions'
import Spinner from './Spinner'

export default function NewsList() {
  const { news, newsLoadingStatus } = useSelector((state) => state)
  const dispatch = useDispatch()

  const { request } = useHttp()

  console.log(newsLoadingStatus)

  useEffect(() => {
    dispatch(newsFetching())
    request('http://localhost:3001/news')
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()))
  }, [])

  if(newsLoadingStatus === 'loading'){
    return (
      <>
        <Spinner />
      </>
    )
  } else if(newsLoadingStatus === 'error'){
    return (
      <>
        <h1>Somethign went wrong</h1>
      </>
    ) 
  }

  return <div>NewsList</div>
}
