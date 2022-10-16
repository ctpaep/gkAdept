import Inpit from '../Inpit'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, deleteAll } from '../../store/actions'
import { useEffect, useState } from 'react'

export default function TableUser(props) {
	const [menu, setMenu] = useState(false)
	const userRedux = useSelector((store) => store.employee)
	const selectCompany = useSelector((store) => store.selectCompany)
	const sortArr = selectCompany.sort((a, b) => a - b)
	const selectUser = useSelector((store) => store.selectUser)
	const dispatch = useDispatch()
	
	useEffect(() => {
        if (selectUser.length > 0) {
            setMenu(true)
        } else {
            setMenu(false)
        }

    }, [selectUser])
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
					{menu ? (
                            <th>
                                <div onClick={() => { dispatch(selectAll('employee')) }}>Снять выделение</div>
                                <div onClick={() => { }}>Редактировать </div>
                                <div onClick={() => { dispatch(deleteAll('employee'))}}>Удалить</div>
                            </th>
                        ) : (
                            <th onClick={() => { dispatch(selectAll('employee')) }}>Выделить все</th>
                        )
                        }
						
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Должность</th>
					</tr>
				</thead>
				<tbody>
					{userRedux.length && userRedux.map((el) => (
						sortArr.map((element) => {
							if (el.company_Id === element) {
								return <Inpit key={el.company_Id} nameType={'employee'} row0={el.id} row1={el.last_name} row2={el.first_name} row3={el.position} />
							}
						})
					))}
				</tbody>
			</table>
		</div>

	)
}
