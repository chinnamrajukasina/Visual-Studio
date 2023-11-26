import React, { useState } from 'react'
import Org from './Org'





export default function OrgList(data) {
    const [orgs, setOrgs] = useState(data.orgs);

    const handleRemoveOrg = (id) => {
        console.log("Remove operation on ", id);
        setOrgs(orgs.filter(org => org.id !== id))
        
        
      }

  return (
    <div>
    {orgs.map(org => <Org org={org} key = {org.id} handleRemoveOrg={handleRemoveOrg}></Org>)}
    </div>
  )
}
 