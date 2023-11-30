import React, { useState } from 'react';
import { Button, Card, Collapse, Input } from 'antd';
const { Panel } = Collapse;


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
    <Collapse bordered={false}>
    <Panel
      header={<span style={{ fontWeight: 'bold' }}>{emp.name}</span>}
      key={emp.id}
      style={{ background: 'Turquoise', margin: '2px' }}
    >
      <Card style={{ width: 350, backgroundColor: 'Turquoise' }}>
        <label>
          Employee name: <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <br />
        <label>
          Employee email: <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </label>
        <div>
          <Button style={{ margin: '4px' }} onClick={() => handleUpdate(emp.id)}>Update Emp</Button>
          <Button style={{ margin: '4px' }} onClick={() => handleRemoveEmp(emp.id)}>Remove Emp</Button>
        </div>
      </Card>
    </Panel>
  </Collapse>
  
  );
}
