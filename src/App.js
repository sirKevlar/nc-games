import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import ReviewSingle from "./pages/ReviewSingle";
import Users from "./pages/Users";
import InvalidPath from "./pages/InvalidPath";
import Sidenav from "./components/Sidenav";
import Intro from "./pages/Intro";

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [profileUser, setProfileUser] = useState("tickle122");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  return (
    <UserContext.Provider value={{ profileUser, setProfileUser }}>
      <div className="App">
        <Header />
        <Sidenav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setReviews={setReviews}
        />
        <Switch>
          <Route exact path="/">
            <Intro users={users} setUsers={setUsers} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/reviews">
            <Reviews
              reviews={reviews}
              setReviews={setReviews}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              sortOrder={sortOrder}
            />
          </Route>
          <Route exact path="/reviews/:review_id">
            <ReviewSingle />
          </Route>
          <Route exact path="/users">
            <Users users={users} setUsers={setUsers} />
          </Route>
          <Route path="*">
            <InvalidPath />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
