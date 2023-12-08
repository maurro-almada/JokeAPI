import "./App.css";
import { ChisteContainer } from "../code";

function App() {
  return (
    <>
      <header>
        <a
          href="https://sv443.net/jokeapi/v2/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <button className="btn">API Doc.</button>
        </a>
      </header>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer"></a>
      </div>
      <h1>Chistes Muy malos generados por JokeAPI</h1>
      <h3>En Español tiene pocos la API 😤</h3>



        <ChisteContainer/>
        

      <div className="sectionChiste"></div>
    </>
  );
}

export default App;
