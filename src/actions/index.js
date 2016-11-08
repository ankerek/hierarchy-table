import { normalize } from 'normalizr';
import { arrayOfPatients } from '../schema';
import * as actions from '../constants/actions';
import data from '../../data/data-1.json';

export const fetchData = () => ({
  type: actions.FETCH_DATA,
  payload: normalize(data, arrayOfPatients),
});

export const removeItem = (payload) => ({
  type: actions.REMOVE_ITEM,
  payload,
})