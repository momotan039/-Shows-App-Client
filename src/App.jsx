import "./App.css";
import { MyRouterProvider } from "./components/MyRouterProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyRouterProvider />
      </Provider>
    </div>
  );
}

export default App;
