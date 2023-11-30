import React, { useState } from 'react';
import Org from './Org';
import { updateOrg } from '../service/OrgSevice';

export default function OrgList({ orgs: initialOrgs }) {
  const [orgs, setOrgs] = useState(initialOrgs);

  const handleRemoveOrg = (id) => {
    console.log("Remove operation on ", id);
    setOrgs(orgs.filter(org => org.id !== id));
  };

  // const handleUpdateOrg = (updatedOrg) => {
  //   console.log("Update operation on ", updatedOrg.id);
  //   setOrgs(prevOrgs =>
  //     prevOrgs.map(org =>
  //       org.id === updatedOrg.id ? { ...org, name: updatedOrg.name, address: updatedOrg.address } : org
  //     )
  //   );
  // };

  const handleUpdateOrg = async (updatedOrg) => {
    console.log("Update operation on ", updatedOrg.id);
  
    // Make the update in the frontend
    setOrgs((prevOrgs) =>
      prevOrgs.map((org) =>
        org.id === updatedOrg.id ? { ...org, name: updatedOrg.name, address: updatedOrg.address } : org
      )
    );
  
    var updateResult = await updateOrg(updatedOrg);
    console.log('org updated in backend' ,updateResult)
  };
  

  // const handleAddEmployee = (orgId) => {
  //   setOrgs(prevOrgs =>
  //     prevOrgs.map(org =>
  //       org._id === orgId ? {
  //         ...org,
  //         employees: [
  //           ...org.employees,
  //           {
  //             id: org.employees.length + 1,
  //             name: `Lecturar${org.employees.length + 1}`,
  //             email: `Lecturar${org.employees.length + 1}@aec.edu.in`
  //           }
  //         ]
  //       } : org
  //     )
  //   );
  // };


  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {orgs.map(org =>
        <Org
          key={org.id}
          currentOrg={org}
          handleRemoveOrg={handleRemoveOrg}
          handleUpdateOrg={handleUpdateOrg}
          // handleAddEmployee={() => handleAddEmployee(org.id)}
        />
      )}
    </div>
  );
}
