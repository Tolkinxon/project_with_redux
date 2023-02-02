import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'
import useHttp from '../hook/useHttp'
import { v4 as uuidv4 } from 'uuid'
import { newsFetched } from '../redux/actions'
import { createSelector } from 'reselect'

export default function NewsAddForm() {
  const dispatch = useDispatch()

  const heade = createSelector(
    (state) => state.obj.header,
    (header) => header,
  )

  const { description, category } = useSelector((state) => {
    return state.obj
  })
  const { header } = useSelector(() => {console.log('render'); return heade})

  const { headerF, descriptionF, categoryF } = bindActionCreators(
    actions,
    dispatch,
  )
  const { request } = useHttp()

  const show = (e) => {
    if (e.target.name === 'header') {
      headerF(e.target.value)
    }
    if (e.target.name === 'text') {
      descriptionF(e.target.value)
    }
    if (e.target.name === 'category') {
      categoryF(e.target.value)
    }
  }

  const obj = {
    header: header,
    description: description,
    category: category,
    id: uuidv4(),
  }

  const a = JSON.stringify(obj)

  const obj1 = [obj]

  const post = () => {
    request(`http://localhost:3001/news`, 'POST', a)
    dispatch(newsFetched({ info: obj1, name: '' }))
    headerF('')
    descriptionF('')
    categoryF('')
  }

  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new news
        </label>
        <input
          onChange={(e) => show(e)}
          type="text"
          required
          name="header"
          className="form-control "
          id="name"
          placeholder="what is header of your news? "
          value={header}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          onChange={(e) => show(e)}
          type="text"
          required
          name="text"
          className="form-control "
          id="text"
          placeholder="what is your news about? "
          style={{ height: '120px' }}
          value={description}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose category of news
        </label>
        <select
          onChange={(e) => show(e)}
          name="category"
          id="category"
          className="form-select"
          required
          value={category}
        >
          <option>News about...</option>
          <option value="hot">Hot news</option>
          <option value="sport">Sport news</option>
          <option value="world">World news</option>
        </select>
      </div>
      <button
        onClick={post}
        className="btn btn-dark shadow-lg w-100 text-light"
      >
        Create News
      </button>
    </form>
  )
}
