import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAll, deleteAll, addInput } from '../../store/actions'
import { onDelete } from '../../helpers/editInput'
import Inpit from '../Inpit'

export default function TableCompany(props) {
    const dispatch = useDispatch()
    const companyRedux = useSelector((store) => store.company)
    const selectCompany = useSelector((store) => store.selectCompany)
    const employee = useSelector((store) => store.employee)
    const [menu, setMenu] = useState(false)
    const [nameCompany, setNameCompany] = useState("")
    const [addressCompany, setAddressCompany] = useState("")
    const [buttonAdd, setButtonAdd] = useState(true)

    function employeeCount(idCompany) {
        let counter = 0
        employee.map(element => {

            if (element.company_Id === idCompany) {
                counter = counter + 1
            };

        })
        return counter
    }

    function submitHandler(e) {
        // e.preventDefault()
        const incrementId = companyRedux[companyRedux.length - 1].id + 1
        console.log('incrementId: ', incrementId);
        dispatch(addInput('company', {
            id: incrementId,
            nameCompany: nameCompany,
            adressCompany: addressCompany,
        }))
        setButtonAdd(true)
    }

    useEffect(() => {
        if (selectCompany.length > 0) {
            setMenu(true)
        } else {
            setMenu(false)
        }

    }, [selectCompany])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {menu ? (
                            <th>
                                <div onClick={() => { dispatch(selectAll('company')) }}>Снять выделение</div>
                                <div onClick={() => { dispatch(deleteAll('company', onDelete(selectCompany, companyRedux))) }}>Удалить</div>
                            </th>
                        ) : (
                            <th onClick={() => { dispatch(selectAll('company')) }}>Выделить все</th>
                        )
                        }

                        <th>Название компании</th>
                        <th>Кол-во сотрудников</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {companyRedux.length && companyRedux.map((el) => (
                        <Inpit key={el.id} nameType={'company'} row0={el.id} row1={el.nameCompany} row2={employeeCount(el.id)} row3={el.adressCompany} />
                    ))}
                </tbody>
            </table>
            <button className='btnAdd' onClick={() => { setButtonAdd(false) }}>Добавить компанию</button>
            {!buttonAdd &&
                <form className="FormAdd">
                    <span>
                        <label> Название:
                        </label>
                        <input type="text" onChange={e => setNameCompany(e.target.value)}></input>
                    </span>
                    <span>
                        <label> Адрес:
                        </label>
                        <input type="text" onChange={e => setAddressCompany(e.target.value)}></input>
                    </span>
                    <button onClick={submitHandler} type="button">Добавить</button>
                </form>
            }
        </div>
    )
}
