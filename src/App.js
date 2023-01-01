import "./App.css";
import Login from "./components/Login";
import TableData from "./components/TableData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateData from "./components/UpdateData";
import CreateData from "./components/CreateData";
import ComponentHeader from "./components/ComponentHeader";
function App() {
  return (
    <BrowserRouter>
      <ComponentHeader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tabledata" element={<TableData />} />
        <Route path="/detail/:id" element={<UpdateData />} />
        <Route path="/create" element={<CreateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
