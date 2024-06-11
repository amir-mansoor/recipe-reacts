import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-gray-200">
      <ToastContainer />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
