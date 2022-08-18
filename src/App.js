import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      Hello I'm a Dictionary
      <div>
      <a href="https://visionary-sprite-04f6dd.netlify.app/" className="btn btn-primary">Click Me</a>
      </div>
      </header>
      </div>
      <main className="text-center">
        <Dictionary />
      </main>
      
      <footer className="App-footer"><small>This project was coded by <a href="https://jadedcode.netlify.app/">Alexandra Jade Rodrigues</a> and is open sourced on <a href="https://github.com/Alexandra-Jade">GitHub</a> and hosted on <a href="https://visionary-sprite-04f6dd.netlify.app/">netlify</a>   </small>
      </footer>
   
    </div>
  );
}

export default App;
