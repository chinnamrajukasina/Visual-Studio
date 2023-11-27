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
      {console.log("from orgList ", orgs)}
      {orgs.map(org =>
        <Org
          currentOrg={org}
          key={org.id}
          handleRemoveOrg={() => handleRemoveOrg}>

        </Org>)}
    </div>
  )
}
