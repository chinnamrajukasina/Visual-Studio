import React from 'react'
import { Card } from 'antd';


export default function Org({org}) {
  return (

    <Card title="Card Title" style={{ width: 300 }}>
      <p>Org name : {org.name}</p>
      <p>More card content</p>
    </Card>
  )
}
