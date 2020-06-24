import React from "react";
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
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/people"/>
                    </Route>
                    <Route exact path="/people">
                        <PeoplePage/>
                    </Route>
                    <Route
                        exact
                        path="/people/:id"
                        render={(props) => (
                            <AddForm
                                page="people"
                                {...props}
                            />
                        )}
                    />

                    <Route exact path="/planets">
                        <PlanetsPage/>
                    </Route>
                    <Route
                        exact
                        path="/planets/:id"
                        render={(props) => (
                            <AddForm
                                page="planets"
                                {...props}
                            />
                        )}
                    />
                    <Route exact path="/starships">
                        <StarshipsPage/>
                    </Route>
                    <Route
                        exact
                        path="/starships/:id"
                        render={(props) => (
                            <AddForm
                                page="starships"
                                {...props}
                            />
                        )}
                    />
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
