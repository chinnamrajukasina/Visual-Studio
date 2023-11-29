import React, { useState } from 'react';
import { Card, Button } from 'antd';
import EmpList from './EmpList';
import Input from 'antd/es/input/Input';

export default function Org({ currentOrg, handleRemoveOrg, handleUpdateOrg }) {
  const [org, setOrg] = useState(currentOrg);
  const [name, setName] = useState(currentOrg.name);
  const [address, setAddress] = useState(currentOrg.address);

  const handleAddEmployee = () => {
    const updatedOrg = { ...org };
    if (updatedOrg.employees == null) {
      updatedOrg.employees = [];
    }
    updatedOrg.employees.push({
      id: updatedOrg.employees.length + 1,
      name: `Lecturar${updatedOrg.employees.length + 1}`,
      email: `Lecturar${updatedOrg.employees.length + 1}@aec.edu.in`
    });
    console.log("from handleAddEmployee ", updatedOrg);
    setOrg(updatedOrg);
  };

  const handleUpdate = (id) => {
    console.log("Update operation on Org", id);
    const updatedOrg = { ...org, name, address };
    console.log(updatedOrg);
    handleUpdateOrg(updatedOrg);
   setOrg(updatedOrg); // Update the local state
  };


  

  return (
    org && (
      <Card title={org.name} style={{ width: 450, backgroundColor: 'DodgerBlue' }}>
        <label>
          Organization name: <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <br />
        <label>
          Organization Address: <Input value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
        </label>
        <div>
          <Button  onClick={() => handleUpdate(org.id)} >Update Org</Button>
          <Button onClick={() => handleRemoveOrg(org.id)}>Remove Org</Button>
          <Button onClick={() => handleAddEmployee()}>Add Employee</Button>
        </div>
        
        <EmpList emps={org.employees} />
      </Card>
    )
  );
}
