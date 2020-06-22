import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import PeoplePage from "./components/pages/PeoplePage";
import AddForm from "./components/pages/AddForm";
import PlanetsPage from "./components/pages/PlanetsPage";
import StarshipsPage from "./components/pages/StarshipsPage";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/pages/404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const addHandler = (item, page, edit, id) => {
        let data = [];
        switch (page) {
            case "people":
                if (edit) {
                    data = [...people];
                    data[id] = item;
                } else data = [...people, item];
                setPeople(data);
                localStorage.setItem("peopleData", JSON.stringify(data));
                break;
            case "planets":
                if (edit) {
                    data = [...planets];
                    data[id] = item;
                } else data = [...planets, item];
                setPlanets(data);
                localStorage.setItem("planetsData", JSON.stringify(data));
                break;
            case "starships":
                if (edit) {
                    data = [...starships];
                    data[id] = item;
                } else data = [...starships, item];
                setStarships(data);
                localStorage.setItem("starshipsData", JSON.stringify(data));
                break;
            default:
                break;
        }
    };

    return (
        <Router>
            <div className="container">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/people" />
                    </Route>
                    <Route exact path="/people">
                        <PeoplePage people={people} setPeople={setPeople} />
                    </Route>
                    <Route
                        exact
                        path="/people/:id"
                        render={(props) => (
                            <AddForm
                                data={people}
                                addHandler={addHandler}
                                page="people"
                                {...props}
                            />
                        )}
                    />

                    <Route exact path="/planets">
                        <PlanetsPage
                            planets={planets}
                            setPlanets={setPlanets}
                        />
                    </Route>
                    <Route
                        exact
                        path="/planets/:id"
                        render={(props) => (
                            <AddForm
                                data={planets}
                                addHandler={addHandler}
                                page="planets"
                                {...props}
                            />
                        )}
                    ></Route>
                    <Route exact path="/starships">
                        <StarshipsPage
                            starships={starships}
                            setStarships={setStarships}
                        />
                    </Route>
                    <Route
                        exact
                        path="/starships/:id"
                        render={(props) => (
                            <AddForm
                                data={starships}
                                addHandler={addHandler}
                                page="starships"
                                {...props}
                            />
                        )}
                    ></Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
