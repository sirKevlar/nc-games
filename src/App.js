import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Reviews from "./pages/Reviews";
import ReviewSingle from "./pages/ReviewSingle";
import Users from "./pages/Users";
import UserSingle from "./pages/UserSingle";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviews/:review_id/comments">
          <Comments />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route>
          <ReviewSingle />
        </Route>
        <Route>
          <Users />
        </Route>
        <Route>
          <UserSingle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
