import FormEveryday from "./components/FormEveryday";

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

export default App;
