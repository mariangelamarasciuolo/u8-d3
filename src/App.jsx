import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
/* import AllTheBooks from "./components/AllTheBooks"; */
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
function App() {
  return (
    <div className="App">
      <TopBar brand="Libreria di React" />
      <Welcome title="benvenuto" />
      {/* <AllTheBooks /> */}
      <SingleBook />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
