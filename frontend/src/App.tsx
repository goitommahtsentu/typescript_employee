import React from 'react';
import AddEmployee from "./components/AddEmployee";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import ListEmployee from "./components/listEmployee";
import EditEmployee from "./components/EditEmployee";
import {GlobalStyle} from "./styledComponents/styledComponents";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Route path='/' component={ListEmployee} exact />
            <Route path='/add' component={AddEmployee} />
            <Route path='/edit/:id' component={EditEmployee} />

        </Router>
    );
}

export default App;