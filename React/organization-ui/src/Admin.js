import OrgList from "./components/OrgList";
import data from "./data"

function Admin() {
  return (
    <>       
     <OrgList orgs={data}/>  
    </>
    );
}

export default Admin;
