import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';

const lista = ["", "", "X", "", "O", "", "X", "", ""]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic-Tac-Toe</h3>
      </header>
      <article>
        <h3>React-ban csinált Amőba (Tic-Tac-Toe)</h3>
        <div className="tartalom">
          <Jatekter betuLista = {lista} />
        </div>
      </article>
      <footer>
        <p className="text-center">
          2024 - Szabó-Mester Alex
        </p>
      </footer>
    </div>
  );
}

export default App;
