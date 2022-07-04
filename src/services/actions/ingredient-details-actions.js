export const GET_DETAILS = 'GET_DETAILS';
export const REMOVE_DETAILS = 'REMOVE_DETAILS';

export const getDetails = (data) => {
  return { type: GET_DETAILS, payload: data }
};

export const removeDetails = (data) => {
  return { type: REMOVE_DETAILS, payload: data }
};