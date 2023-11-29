import React, { useState } from 'react'
import { Button, Card} from 'antd';

export default function Emp({ emp, handleRemoveEmp, handleUpdateEmp }) {

  const [name, setName] = useState(emp.name);
  const [email, setEmail] = useState(emp.email);
  const handleUpdate = (id) => {
    console.log("Update operation Emp on ", id);
    const updatedEmp = emp;
    updatedEmp.name = name;
    updatedEmp.email = email;
    console.log(updatedEmp);
    handleUpdateEmp(updatedEmp);
  }
  return (
    <Card title={emp.name} style={{ width: 300, backgroundColor: 'Turquoise' }}>
      <label>
        Employee name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </label>
      <br />
      <label>
        Employee email: <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
      </label>
      <div>
        <Button onClick={() => handleUpdate(emp.id)}>Update Emp</Button>
        <Button onClick={() => handleRemoveEmp(emp.id)}>Remove Emp</Button>

      </div>
    </Card>
  )
}
