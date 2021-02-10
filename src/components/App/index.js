import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { handleInitialData } from "../../actions/shared";
import QuestionsList from "../QuestionsList";
import AppContainer from "../AppContainer";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <AppContainer>
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path="/" exact component={QuestionsList} />
                            <Route path="/teste" exact component={() => <div> teste </div>} />
                        </div>
                    }
                </AppContainer>
            </Router>
        );
    }
}

export default connect()(App);
