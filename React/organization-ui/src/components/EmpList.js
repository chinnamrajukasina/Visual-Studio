import React from 'react'
import Emp from './Emp';


export default function EmpList(data) {
  // const [emps, setEmps] = useState(data.emps);
  const emps=data.emps

  const handleUpdateEmployee = data.handleUpdateEmployee;
  const handleRemoveEmp = data.handleRemoveEmp
  // const handleRemoveEmp = (id) => {
  //   console.log("Remove operation on ", id);
  //   var updatedEmps = emps.filter(emp => emp.id !== id);
  //   setEmps(updatedEmps)
  // }


  return (

    emps && emps.map(emp => <Emp
      emp={emp}
      key={emp.id}
      handleRemoveEmp={handleRemoveEmp}
      handleUpdateEmp={handleUpdateEmployee}
    ></Emp>)
  )
}
