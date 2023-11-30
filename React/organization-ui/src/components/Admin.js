// Admin.js
import OrgList from './OrgList';
import { Card, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../service/OrgSevice';


function Admin() {  
const[orgs, setOrgs] =useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  const fetchDataFromApi = async () => {
    try {
      const result = await fetchData();
      setOrgs(result);
    } catch (error) {
      // setError(error);
    } finally {
      setLoading(false);
    }
  };

    fetchDataFromApi();
  
}, []);

  return (
    <div style={{ display: 'flex' }}>
      <Card title="Chairman" headStyle={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}
        style={{ flex: '1', backgroundColor: 'navy' }}>
        {
          loading ? (
          <Spin size="large" tip="Loading..." /> // Show Spin component while loading
        ) : (
          <OrgList orgs={orgs} />
        )
          
          }
      </Card>
    </div>
  );
}

export default Admin;
