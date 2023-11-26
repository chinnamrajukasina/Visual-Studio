import React from 'react'
import { Card } from 'antd';
import EmpList from './EmpList';

const handleAddEmployee = (id) => {
  console.log("Add operation");
  // Implement your add logic here
}

const handleUpdate = (id) => {
  console.log("Update operation on ", id);
  // Implement your update logic here
}


export default function Org({ org, handleRemoveOrg }) {
  return (
    <Card title={org.name} style={{ width: 300 }}>
      <p>Address : {org.address}</p>
      <div>
        <button onClick={() => handleAddEmployee}>Add Employee</button>
        <button onClick={() => handleUpdate(org.id)}>Update Org</button>
        <button onClick={() => handleRemoveOrg(org.id)}>Remove Org</button>
      </div>
      <EmpList emps={org.employees} />
    </Card>
  )
}
