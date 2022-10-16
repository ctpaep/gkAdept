import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAll, deleteAll } from '../../store/actions'
import { onUpdate, onDelete } from '../../helpers/editInput'
import Inpit from '../Inpit'

export default function TableCompany(props) {
    const dispatch = useDispatch()
    const companyRedux = useSelector((store) => store.company)
    const selectCompany = useSelector((store) => store.selectCompany)
    const employee = useSelector((store) => store.employee)
    const [menu, setMenu] = useState(false)

    function employeeCount(idCompany) {
        let counter = 0
        employee.map(element => {

            if (element.company_Id === idCompany) {
                counter = counter + 1
            };

        })
        return counter
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
                                <div onClick={() => { onUpdate('company', selectCompany, companyRedux )}}>Редактировать </div>
                                <div onClick={() => { dispatch(deleteAll('company', onDelete(selectCompany, companyRedux) )) }}>Удалить</div>
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
        </div>
    )
}
