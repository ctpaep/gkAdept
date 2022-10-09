import { tableTypes } from './types'

export const selectBox = (nameType, id) => ({ type: tableTypes.SELECT_BOX, payload: { nameType, id } });