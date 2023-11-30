// Admin.js
import OrgList from './OrgList';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../service/OrgSevice';


function Admin() {

  
const[orgs, setOrgs] =useState([]);

useEffect(() => {
  const fetchDataFromApi = async () => {
    try {
      const result = await fetchData();
      setOrgs(result);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  fetchDataFromApi();
  
}, []);

  return (
    <div style={{ display: 'flex' }}>
      <Card title="Chairman" headStyle={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}
        style={{ flex: '1', backgroundColor: 'navy' }}>
        {<OrgList orgs={orgs} /> }
      </Card>
    </div>
  );
}

export default Admin;
