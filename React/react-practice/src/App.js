// App.js
import Boot from "./components/Boot";
import Counter from "./components/Counter";
import CustomCounter from "./components/CustomCounter";
import AppRouter from "./components/Router";

function App() {
  return (
    <>
      <CustomCounter />
      <hr/>
      <Boot/>
      <Counter/>
      <AppRouter />
    </>
  );
}

export default App;

