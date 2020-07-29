import React, { useEffect } from "react";
import { PeopleListWrapper, HeroDetails, FavoriteList } from "./components";
import { Route, useHistory } from "react-router-dom";
import PeopleListBtn from "./components/PeopleListBtn";
import hoc from "./hoc/hoc";

export const ADD_TO_LIST = "ADD_TO_LIST";
export const DELETE_FROM_LIST = "DELETE_FROM_LIST";
export const ADD_LIST = "ADD_LIST";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  }, []);


  const FavoriteButton = hoc(PeopleListBtn); // HOC

  return (
    <div className="App">
      <PeopleListBtn title="PeopleList" path="/" />
      <FavoriteButton />
      <Route exact path="/herodetails/:id" component={HeroDetails} />
      <Route exact path="/favorite" component={FavoriteList} />
      <Route exact path="/" component={PeopleListWrapper} />
    </div>
  );
}

export default App;
