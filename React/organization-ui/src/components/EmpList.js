import React from 'react'
import Emp from './Emp';


export default function EmpList(data) {
  const emps = data.emps
  const handleUpdateEmployee = data.handleUpdateEmployee;
  const handleRemoveEmp = data.handleRemoveEmp
  
  return (
    emps && emps.map(emp => <Emp
      emp={emp}
      key={emp.id}
      handleRemoveEmp={handleRemoveEmp}
      handleUpdateEmp={handleUpdateEmployee}
    ></Emp>)
  )
}
