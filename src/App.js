import "./App.css";
import Weather from "./Weather"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project is{" "}
            <a href="https://github.com/fatemehkhoramdel/weatherappreact.git">
              {" "}
              open source
            </a>{" "}
            and creat by Ftaemeh Khoramdel
          </p>
        </footer>
      </div>
    </div>
  );
}
