
import { BrowserRouter } from "react-router-dom"
import LayoutContainer from "./components/LayoutContainer/LayoutContainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <LayoutContainer></LayoutContainer>
      </BrowserRouter>

    </div>
  );
}

export default App;
