import * as R from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
} from '../actionTypes.js'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)
      break
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)
      break
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    default:
      return state
      break
  }
}
