import { Schema, arrayOf } from 'normalizr';

const createSchema = (schemaKey, idName) => new Schema(schemaKey, { 
  idAttribute: entity => Number(entity.data[idName]),
  assignEntity: (output, key, value, input) => {
    if(key === 'data') output.id = Number(input.data[idName]);
  }
});

export const Patient = createSchema('patients', 'Identification number');
export const Relative = createSchema('relatives', 'Relative ID');
export const Phone = createSchema('phones', 'Phone ID');

Patient.define({
  kids: {
    has_relatives: {
      records: arrayOf(Relative)
    }
  }
});

Relative.define({
  kids: {
    has_phone: {
      records: arrayOf(Phone)
    }
  }
});

export const arrayOfPatients = arrayOf(Patient);