import React, { useState } from 'react'
import Emp from './Emp';


export default function EmpList(data) {
  const [emps, setEmps] = useState(data.emps);

  const handleRemoveEmp = (id) => {
    console.log("Remove operation on ", id);
    var updatedEmps = emps.filter(emp => emp.id !== id);
    setEmps(updatedEmps)
  } 

  const handleUpdateEmp = (employee) => {
    const id = employee.id;
    console.log("update operation on ", id);
    const updatedEmps = [...emps];
    var updatedEmp = updatedEmps.filter(emp => emp.id === id);
    updatedEmp.name = employee.name;
    updatedEmp.email = employee.email;
    setEmps(updatedEmps)
  } 

  return (

    emps &&  emps.map(emp => <Emp 
      emp={emp} 
      key = {emp.id}
      handleRemoveEmp = {handleRemoveEmp}
      handleUpdateEmp= {handleUpdateEmp}
      ></Emp>)
  )
}
