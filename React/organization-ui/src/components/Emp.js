import React from 'react'
import { Card } from 'antd';


export default function Emp({emp}) {
  return (

    <Card title={emp.name} style={{ width: 300 }}>
      <p>emp email: {emp.email}</p>
    </Card>
  )
}
