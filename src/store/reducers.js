import { tableTypes } from './types'
import demoUsers from '../api/demoUsers.json'
import demoCompany from '../api/demoCompany.json'

const initState = {
    company: demoCompany,
    employees: demoUsers,
    selectCompany: [],
    selectUser: []

}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        // case jokeTypes.DELETE_JOKE:
        //     const filteredJokes = state.jokes.filter(joke => joke.id !== action.payload.id);
        //     return { ...state, jokes: filteredJokes };
        case tableTypes.SELECT_BOX:
            if (action.payload.nameType === 'company') {
                let indexArr = state.selectCompany.indexOf(action.payload.id)
                console.log('indexArr: ', indexArr);
            
                if (indexArr >= 0) {
                    console.log(`Такой элемент существует под индексом ${indexArr}`);
                    const deleteSelect = state.selectCompany.filter(el => el !== action.payload.id);
                    console.log('deleteSelect: ', deleteSelect);

                    return { ...state, selectCompany: deleteSelect };
                } else {
                    return { ...state, selectCompany: [...state.selectCompany, action.payload.id] };

                }
            }
            if (action.payload.nameType === 'employee') {
                return { ...state, selectUser: [...state.selectUser, action.payload.id] };
            }


        default:
            return state;
    }
}