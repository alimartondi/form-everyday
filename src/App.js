import FormEveryday from "./components/FormEveryday";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="images/goodfood-header-pattern.svg"
          alt="goodfood-header-pattern"
          className="img-fluid"
        />
      </header>
      <main>
        <StudentForm />
      </main>
      <footer>Yeah I'm Footer</footer>
    </div>
  );
}

export default App;
