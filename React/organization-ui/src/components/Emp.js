import React from 'react'
import { Card } from 'antd';



const handleUpdate = (id) => {
  console.log("Update operation Emp on ", id);
  // Implement your update logic here
}


export default function Emp({emp, handleRemoveEmp}) {
  return (

    <Card title={emp.name} style={{ width: 300 }}>
      <p>emp email: {emp.email}</p>
      <div>
        <button onClick={() => handleUpdate(emp.id)}>Update Emp</button>
        <button onClick={() => handleRemoveEmp(emp.id)}>Remove Emp</button>
      

      </div>
    </Card>
  )
}
