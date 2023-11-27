import React, { useState } from 'react';
import { Card } from 'antd';
import EmpList from './EmpList';

export default function Org({ currentOrg, handleRemoveOrg, handleUpdateOrg }) {
  console.log(currentOrg)
  
  const handleAddEmployee = () => {
    // const currentOrg = { ...orgs };
    if (currentOrg.employees == null) {
      currentOrg.employees = [];
    }
    currentOrg.employees.push({
      id: currentOrg.employees.length + 1,
      name: `xman${currentOrg.employees.length + 1}`,
      email: `xman${currentOrg.employees.length + 1}@ekip.com`
    });
    console.log("from handleAddEmsss ", currentOrg)
    // setOrg(currentOrg)

  }
  const [name, setName] = useState(currentOrg.name);
  const [address, setAddress] = useState(currentOrg.address);
   const handleUpdate = (id) => {
    console.log("Update operation on Org", id);
    const updatedOrg = currentOrg;
    updatedOrg.name = name;
    updatedOrg.address = address;
    console.log(updatedOrg,'hello');
    debugger;
    handleUpdateOrg(updatedOrg);
  }

  return (
    currentOrg && <Card title={currentOrg.name} style={{ width: 300, backgroundColor: 'DodgerBlue' }}>
      <label>
        Organization name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </label>
      <br />
      <label>
        Organization Address: <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
      </label>
      <div>
        <button onClick={() => handleUpdate(currentOrg.id)}>Update Org</button>
        <button onClick={() => handleRemoveOrg(currentOrg.id)}>Remove Org</button>
        <button onClick={() => handleAddEmployee()}>Add Employee</button>
      </div>
      <EmpList emps={currentOrg.employees} />
    </Card>
  )
}
