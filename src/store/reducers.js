import { jokeTypes } from './types'

const initState = {
    jokes: [
        {
            id: 'ewe123rwsdf',
            value:
                'When Bruce Banner gets mad,he turns into the Hulk. When Chuck Norris gets mad,the Hulk turns and runs.',
        },
        {
            id: 'ewerw344sff',
            value: 'Chuck Norris can make you evacuate your bowels with a high five.',
        },
        {
            id: 'ewe555rwscv',
            value:
                'Chuck Norris can drive a frieght train, trim his toenails and butcher a steer at the same time time.',
        },
    ]
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case jokeTypes.DELETE_JOKE:
            const filteredJokes = state.jokes.filter(joke => joke.id !== action.payload.id);
            return { ...state, jokes: filteredJokes };

        default:
            return state;
    }
}