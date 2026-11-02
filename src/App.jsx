import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/todoitems";
import { useState , useEffect } from "react";
import Contener from "./components/contener";

function App() {
  let [itemse, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("itemse")) || [];
  });
  useEffect(() => {
    localStorage.setItem("itemse", JSON.stringify(itemse));
  }, [itemse]);
  return (
    <Contener>
      <AppName />
      <AddTodo setItems={setItems} itemse={itemse} />
      <Todoitems itemse={itemse} setItems={setItems} />
    </Contener>
  );
}

export default App;
