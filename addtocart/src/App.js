import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
