import { useDispatch, useSelector} from 'react-redux';
import {selectBox} from '.././store/actions'
import { nameTypes } from '../store/reducers';



export default function Inpit(props) {
  const selectItems = useSelector((store) =>store[nameTypes[props.nameType]])
  const dispatch = useDispatch()
  const {nameType, row0, row1, row2, row3} = props
  const selected = selectItems.includes(row0)
  return (
     <tr className={`inputCheck ${selected ? "active" : "" }`}>
        <td><input  onChange={()=>{dispatch(selectBox(nameType, row0))}} checked={selected} type="checkbox"  name="a" value={`${row0}`} /></td>
        <td>{row1}</td>
        <td>{row2}</td>
        <td>{row3}</td>
      </tr>
  )
}
