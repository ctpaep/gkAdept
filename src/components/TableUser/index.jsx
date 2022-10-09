import React from 'react'
import Inpit from '../Inpit'
import { useSelector } from 'react-redux'

export default function TableUser(props) {
	const userRedux = useSelector((store) => store.employees)
	const selectCompany = useSelector((store) => store.selectCompany)
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Выбрать</th>
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Должность</th>
					</tr>
				</thead>
				<tbody>
					{userRedux.length && userRedux.map((el) => (
						selectCompany.map((element)=>{
							// console.log("el", el);
							// console.log("element", element);
							if (el.company_Id === element) {
								console.log("worl", el.last_name, el.last_name, el.position);
								<Inpit key={el.company_Id} nameType = {'employee'} row0={el.id} row1={el.last_name} row2={el.first_name} row3={el.position} />
							}
						})
					))}
				</tbody>
			</table>
		</div>

	)
}
