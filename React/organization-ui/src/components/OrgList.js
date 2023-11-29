import React, { useState } from 'react'
import Org from './Org'

export default function OrgList(data) {
  const [orgs, setOrgs] = useState(data.orgs);

  const handleRemoveOrg = (id) => {
    console.log("Remove operation on ", id);
    setOrgs(orgs.filter(org => org.id !== id))
  }
  const handleUpdateOrg = (org) =>{
    // debugger;
    console.log("in orglist")
    const id = org.id;
    console.log("updated operations on", id);
    const updatedOrgs = [...orgs];
    var updatedOrg = updatedOrgs.filter(org => org.id === id);
    updatedOrg.name = org.name;
    updatedOrg.address = org.address;
    setOrgs(updatedOrgs)
  }

  return (
      orgs.map(org =>
        <Org
          currentOrg={org}
          key={org.id}
          handleRemoveOrg={handleRemoveOrg}
          handleUpdateOrg= {handleUpdateOrg}>
        </Org>
        )

  )
}
