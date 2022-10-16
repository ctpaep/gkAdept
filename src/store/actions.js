import { tableTypes } from './types'

export const selectBox = (nameType, id) => ({ type: tableTypes.SELECT_BOX, payload: { nameType, id } });
export const selectAll = (nameType) => ({ type: tableTypes.SELECT_ALL, payload: { nameType} });
export const deleteAll = (nameType) => ({ type: tableTypes.DELETE_ALL, payload: { nameType} });