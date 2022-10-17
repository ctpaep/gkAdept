import { tableTypes } from './types'

export const selectBox = (nameType, id) => ({ type: tableTypes.SELECT_BOX, payload: { nameType, id } });
export const selectAll = (nameType) => ({ type: tableTypes.SELECT_ALL, payload: { nameType} });
export const deleteAll = (nameType, newArr) => ({ type: tableTypes.DELETE_ALL, payload: { nameType, newArr} });
export const editInput = (nameType, object) => ({ type: tableTypes.EDIT_INPUT, payload: { nameType, object } });