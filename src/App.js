import FormEveryday from "./components/FormEveryday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import MenuForm from "./components/MenuForm";
import Summary from "./components/Summary";
import Thankyou from "./components/Thankyou";
import Register from "./components/Register";
import Login from "./components/Login";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function RouteApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/menu" element={<MenuForm />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

function App() {
  return (
    <div className="App vh-100">
      <header>
        <img
          src="images/goodfood-header-pattern.svg"
          alt="goodfood-header-pattern"
          className=" img-fluid"
        />
        <img
          src="images/goodfood-logo.svg"
          alt="goodfood-logo"
          className=" img-fluid"
        />
      </header>
      <main>
        <FormEveryday />
      </main>
      {/* <footer className="fixed-bottom text-end">
        <img
          src="images/goodfood-footer-pattern.svg"
          alt="goodfood-header-pattern"
          className="img-fluid"
        />
      </footer> */}
    </div>
  );
}

export default RouteApp;
