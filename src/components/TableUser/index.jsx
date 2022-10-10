import Inpit from '../Inpit'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll } from '../../store/actions'

export default function TableUser(props) {
	const userRedux = useSelector((store) => store.employee)
	const selectCompany = useSelector((store) => store.selectCompany)
	const sortArr = selectCompany.sort((a, b) => a - b)
	const dispatch = useDispatch()

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th onClick={() => { dispatch(selectAll('employee')) }}>Выделить все</th>
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
