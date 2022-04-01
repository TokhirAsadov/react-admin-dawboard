import './App.css';
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import UserList from "./component/userList/UserList";
import Product from "./pages/product/Product"


function App() {
  return (
  <Router>
      <Topbar />
      <div className="container">
          <Sidebar />
          <Routes>
              <Route path={"/"} exact element={<Home />} />
              <Route path={"/users"} element={<UserList />}/>
              <Route path={"/product"} element={<Product />} />
          </Routes>
      </div>
  </Router>

  );
}

export default App;
