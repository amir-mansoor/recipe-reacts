import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
