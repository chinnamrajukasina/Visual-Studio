import React from 'react'
import Org from './Org'

export default function OrgList({orgs}) {
    
  return (
    <div>
       { console.log(orgs)}

    {orgs.map(org => <Org org={org} key = {org.id}></Org>)}


    </div>
  )
}
 