import React, { useState } from 'react'
import { Card } from 'antd';
import EmpList from './EmpList';




export default function Org({ currentOrg, handleRemoveOrg }) {
    const [org, setOrg] = useState(currentOrg)

    const handleAddEmployee = () => {
       const currentOrg = [...org];
       const updatedEmps = [...currentOrg.employees, {id: -1, name: "xxx", email: "xxxx"}];
        currentOrg.employees = updatedEmps;
        setOrg(currentOrg)

      }
      
      const handleUpdate = (id) => {
        console.log("Update operation on ", id);
        // Implement your update logic here
      }

  return (
    <Card title={org.name} style={{ width: 300 }}>
      <p>Address : {org.address}</p>
      <div>
        <button onClick={() => handleAddEmployee()}>Add Employee</button>
        <button onClick={() => handleUpdate(org.id)}>Update Org</button>
        <button onClick={() => handleRemoveOrg(org.id)}>Remove Org</button>
      </div>
      <EmpList emps={org.employees} />
    </Card>
  )
}
