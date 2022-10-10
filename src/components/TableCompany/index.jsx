import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAll } from '../../store/actions'
import { onDelete } from '../../helpers/editInput'
import Inpit from '../Inpit'

export default function TableCompany(props) {
    const dispatch = useDispatch()
    const companyRedux = useSelector((store) => store.company)

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => { dispatch(selectAll('company')) }}>Выделить все</th>
                        <th>Название компании</th>
                        <th>Кол-во сотрудников</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {companyRedux.length && companyRedux.map((el) => (
                        <Inpit key={el.id} nameType={'company'} row0={el.id} row1={el.nameCompany} row2={0} row3={el.adressCompany} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
