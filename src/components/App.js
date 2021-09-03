import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
