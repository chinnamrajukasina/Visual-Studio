import OrgList from "./components/OrgList";
import data from "./data"

function App() {
  return (
    <OrgList orgs={data} name = 'something'/>  
    );
}

export default App;


