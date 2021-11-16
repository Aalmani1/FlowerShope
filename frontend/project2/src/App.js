import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Compnents/Navbar";
import AdminNavbar from "./Compnents/Admin/AdminNavbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AdminNavbar />
    </div>
  );
}

export default App;
