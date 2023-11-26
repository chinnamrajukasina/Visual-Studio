import React from 'react'
import Emp from './Emp';


export default function EmpList({emps}) {
  return (

    emps &&  emps.map(emp => <Emp emp={emp} key = {emp.id}></Emp>)
  )
}
