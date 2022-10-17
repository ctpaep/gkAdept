import Inpit from '../Inpit'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, deleteAll, addInput } from '../../store/actions'
import { useEffect, useState } from 'react'
import { onDelete } from '../../helpers/editInput'

export default function TableUser(props) {
	const [menu, setMenu] = useState(false)
	const userRedux = useSelector((store) => store.employee)
	const selectCompany = useSelector((store) => store.selectCompany)
	const sortArr = selectCompany.sort((a, b) => a - b)
	const selectUser = useSelector((store) => store.selectUser)
	const dispatch = useDispatch()
	const [buttonAdd, setButtonAdd] = useState(true)
	const [firstName, setFirstName] = useState()
	const [secondName, setSecondName] = useState()
	const [position, setPosition] = useState()

	function submitHandler(e) {
		// e.preventDefault()
		const incrementId = userRedux[userRedux.length - 1].id + 1
		console.log('incrementId: ', incrementId);
		dispatch(addInput('employee', {
			id: incrementId,
			first_name: firstName,
			last_name: secondName,
			position: position,
			company_Id: selectCompany[0],
		}))
		setButtonAdd(true)
	}

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
								<div onClick={() => { dispatch(deleteAll('employee', onDelete(selectUser, userRedux))) }}>Удалить</div>
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
			<button className='btnAdd' onClick={() => { setButtonAdd(false) }} type="button">Добавить сотрудника</button>
			{!buttonAdd &&
				<form className="FormAdd">
					<span>
						<label> Фамилия:
						</label>
						<input type="text" onChange={e => setSecondName(e.target.value)}></input>
					</span>
					<span>
						<label> Имя:
						</label>
						<input type="text" onChange={e => setFirstName(e.target.value)}></input>
					</span>
					<span>
						<label> Должность:
						</label>
						<input type="text" onChange={e => setPosition(e.target.value)}></input>
					</span>
					<button onClick={submitHandler} type="button">Добавить</button>
				</form>
			}
		</div>

	)
}
