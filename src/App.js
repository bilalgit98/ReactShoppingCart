// import Header from './components/Header';
import Main from "./components/Main";
// import Basket from './components/Basket';
import ShoppingCartContext from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContext>
      <div className="App">
        {/* <Header /> */}
        <div className="row">
          <Main />
          {/* <Basket /> */}
        </div>
      </div>
    </ShoppingCartContext>
  );
}
export default App;
