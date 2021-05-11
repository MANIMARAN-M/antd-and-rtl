// import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/index";
import DataPickers from "./Components/DatePicker/DatePicker";
import "./Styles/style.css";
import "./App.css";
import FromDesign from "./Components/FormDesign/FromDesign";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import SearchBox from "./SearchTest/SearchBox";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <SearchBox /> */}
        <Switch>
          <Route exact path="/" component={DataPickers} />
          <Route path="/formdesign" component={FromDesign} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
