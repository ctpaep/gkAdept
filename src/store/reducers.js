import { tableTypes } from './types'
import demoUsers from '../api/demoUsers.json'
import demoCompany from '../api/demoCompany.json'

const initState = {
    company: demoCompany,
    employee: demoUsers,
    selectCompany: [],
    selectUser: []

}
export const nameTypes = {
    company: 'selectCompany',
    employee: 'selectUser'
}


export const reducers = (state = initState, action) => {
    const nameType = action?.payload?.nameType
    const selectNameType = nameTypes[nameType]
    switch (action.type) {
        case tableTypes.SELECT_BOX:

            let indexArr = state[selectNameType].indexOf(action.payload.id)

            if (indexArr >= 0) {
                console.log(`Такой элемент существует под индексом ${indexArr}`);
                const deleteSelect = state[selectNameType].filter(el => el !== action.payload.id);

                return { ...state, [selectNameType]: deleteSelect };
            } else {
                return { ...state, [selectNameType]: [...state[selectNameType], action.payload.id] };

            }


        case tableTypes.SELECT_ALL:
            if (state[selectNameType].length === 0) {

                const selectAll = state[action.payload.nameType].map(el => el.id);
                return { ...state, [selectNameType]: selectAll };
            } else {
                return { ...state, [selectNameType]: [] };
            }

        case tableTypes.DELETE_ALL:
            return { ...state, [nameType]: action.payload.newArr, [selectNameType]: [] };

            case tableTypes.EDIT_INPUT:
                
                return { ...state, [nameType]: state[nameType].map((el)=>{
                    if (el.id !== action.payload.object.id){
                        return el
                    }
                    return {...el, ...action.payload.object}
                }) };
            

        case tableTypes.ADD_INPUT:
        console.log('add input', action.payload.object);    
        return { ...state, [nameType]: [action.payload.object, ...state[nameType]]}
        

        default:
            return state;
    }
}