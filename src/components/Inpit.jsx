import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import {selectBox} from '.././store/actions'


export default function Inpit(props) {
  const dispatch = useDispatch()
  let {nameType, row0, row1, row2, row3} = props
  
  return (
     <tr>
        <td><input onClick={()=>{dispatch(selectBox(nameType, row0))}} type="checkbox" name="a" value={`${row0}`} /></td>
        <td>{row1}</td>
        <td>{row2}</td>
        <td>{row3}</td>
      </tr>
  )
}
