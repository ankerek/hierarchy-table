import * as actions from '../constants/actions';

const initialState = {
  patientsIds: [],
  patients: {},
  relatives: {},
  phones: {},
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case actions.FETCH_DATA:
      const { entities: { patients, relatives, phones }, result } = payload;
      return {
        patientsIds: result,
        patients,
        relatives,
        phones,
      };

    case actions.REMOVE_ITEM:
      const { type, parentId, index } = payload;
      let parentType;
      let parentHasType;
      if(type === 'relatives') {
        parentType = 'patients';
        parentHasType = 'has_relatives';
      } else if(type === 'phones') {
        parentType = 'relatives';
        parentHasType = 'has_phone';
      }

      let entityCopy = parentId ? {...state[parentType]} : [...state.patientsIds]
      const records = parentId ? entityCopy[parentId].kids[parentHasType].records : entityCopy;

      records.splice(index, 1);

      return {
        ...state,
        [parentId ? [parentType] : 'patientsIds']: entityCopy,
      }

    default:
      return state;
  }
}

export default reducer;

export const getPatients = state => state.patientsIds.map(id => state.patients[id]);

export const getItems = (state, ids) => ids.map(id => state[id]);