import useHttp from '../hook/useHttp'
import { useSelector, useDispatch } from 'react-redux'
import { newsFetching, newsFetched, newsFetchingError } from '../redux/actions'



export default function NewsListItem(props) {
  const { header, description, category, id, delet } = props


  let elementClassName
  switch (category) {
    case 'hot':
      elementClassName = 'bg-danger bg-gradient'
      break
    case 'sport':
      elementClassName = 'bg-primary bg-gradient'
      break
    case 'world':
      elementClassName = 'bg-success bg-gradient'
      break
    default:
      elementClassName = 'bg-info bg-gradient'
  }

  return (
    <li
      className={`card flex-row shadow-lg text-white my-2 w-75 ${elementClassName}`}
    >
      <img
        src="https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="header image"
        className="img-fluid w-25 d-inline"
        style={{ objectFit: 'cover' }}
      />
      <div className="card-body">
        <h6 className="card-title">{header}</h6>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button className="btn-close" type="button" aria-label="Close" onClick={() => delet(id)}></button>
      </span>
    </li>
  )
}
