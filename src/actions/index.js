import * as actions from '../constants/actions';

export const removeItem = (payload) => ({
  type: actions.REMOVE_ITEM,
  payload,
})