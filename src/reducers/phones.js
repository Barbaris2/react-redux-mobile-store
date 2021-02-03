import * as R from 'ramda'

import { FETCH_PHONES_SUCCESS } from '../actionTypes.js'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      console.log(payload)
      const newValues = R.indexBy(R.prop('id'), payload)
      console.log(newValues)
      return R.merge(state, newValues)
      break

    default:
      return state
      break
  }
}
