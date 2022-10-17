import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBox, editInput } from '.././store/actions'
import { nameTypes } from '../store/reducers';

export default function Inpit(props) {
    const { nameType, row0, row1, row2, row3, onSave } = props
    const [inputs, setInputs] = useState({ row1: "", row2: "", row3: "" });
    const [firstName, setFirstName] = useState(row1)
    const [secondName, setSecondName] = useState(row2)
    const [position, setPosition] = useState(row3)
    const [nameCompany, setNameCompany] = useState(row1)
    const [addressCompany, setAddressCompany] = useState(row3)

    const selectItems = useSelector((store) => store[nameTypes[props.nameType]])
    const dispatch = useDispatch()
    const selected = selectItems.includes(row0)

    function handlerForm(e) {
        e.preventDefault()
        if (nameType === 'employee') {
            console.log("hendlerInput", inputs);
            setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));

        }
    }
    function handlerSubmitEmployee() {
        dispatch(editInput(nameType, {
            id: row0,
            first_name: firstName,
            last_name: secondName,
            position: position,
        }))
        onSave()
    }

    function handlerSubmitCompany() {
        dispatch(editInput(nameType, {
            id: row0,
            nameCompany: nameCompany,
            adressCompany: addressCompany,
        }))
        onSave()
    }

    return (
        <>
            {
                props.nameType === 'employee' ? (
                    <tr className={`inputCheck ${selected ? "active" : ""}`}>
                        {/* <td><input onChange={() => { dispatch(selectBox(nameType, row0)) }} checked={selected} type="checkbox" name="a" value={`${row0}`} /></td> */}
                        <td><button onClick={handlerSubmitEmployee} type="button" name="button" value={`${row0}`}>Сохранить</button></td>
                        <td><input type="text" onChange={e => setFirstName(e.target.value)} name="row1" value={firstName} /></td>
                        <td><input type="text" onChange={e => setSecondName(e.target.value)} name="row2" value={secondName} /></td>
                        <td><input type="text" onChange={e => setPosition(e.target.value)} name="row3" value={position} /></td>
                    </tr>
                ) : (
                    <tr className={`inputCheck ${selected ? "active" : ""}`}>
                        <td><button onClick={handlerSubmitCompany} type="button" name="button" value={`${row0}`}>Сохранить</button></td>
                        <td><input type="text" onChange={e => setNameCompany(e.target.value)} value={nameCompany} /></td>
                        <td>{row2}</td>
                        <td><input type="text" onChange={e => setAddressCompany(e.target.value)} value={addressCompany} /></td>
                    </tr>
                )
            }
        </>

    )
}