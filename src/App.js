import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Reviews from "./pages/Reviews";
import ReviewSingle from "./pages/ReviewSingle";
import Users from "./pages/Users";
import UserSingle from "./pages/UserSingle";
import InvalidPath from "./pages/InvalidPath";
import Sidenav from "./components/Sidenav";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <Header />
      <Sidenav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviews/:review_id/comments">
          <Comments />
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/reviews/:review_id">
          <ReviewSingle />
        </Route>
        <Route exact path="/users">
          <Users users={users} setUsers={setUsers} />
        </Route>
        <Route exact path="/users/:user_id">
          <UserSingle />
        </Route>
        <Route path="*">
          <InvalidPath />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
