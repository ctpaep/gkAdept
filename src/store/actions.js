import { jokeTypes } from './types'

export const deleteJoke = (id) => ({ type: jokeTypes.DELETE_JOKE, payload: { id } });