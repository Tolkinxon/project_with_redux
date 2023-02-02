import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions'
import React from 'react'
import { bindActionCreators } from 'redux'

export default function NewsFilter() {
  const dispatch = useDispatch()
  const { filt, incr } = bindActionCreators(actions, dispatch)

  
  const active = (e) => {
    const element = e.target
    const elementP = element.parentElement.childNodes.forEach((item) =>
      item.classList.remove('active'),
    )
    element.classList.add('active')
    filt(e.target.value)
  }

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group h-25">
          <button
            className="btn btn-outline-dark active"
            value={'all'}
            onClick={(a) => active(a)}
          >
            All
          </button>
          <button
            className="btn btn-danger "
            value={'hot'}
            onClick={(a) => active(a)}
          >
            Hot news
          </button>
          <button
            className="btn btn-primary"
            value={'sport'}
            onClick={(a) => active(a)}
          >
            Sport news
          </button>
          <button
            className="btn btn-success"
            value={'world'}
            onClick={(a) => active(a)}
          >
            World news
          </button>
        </div>
      </div>
    </div>
  )
}
