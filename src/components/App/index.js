import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router';
import QuestionsList from "../QuestionsList";
import QuestionDetails from "../QuestionDetails";
import QuestionSubmit from "../QuestionSubmit";
import Leaderboard from "../Leaderboard";
import AppContainer from "../AppContainer";
import { history } from '../../middleware';
import { handleInitialData } from "../../actions/shared";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <Router>
                    <AppContainer>
                        {this.props.loading === true
                            ? null
                            : <Switch>
                                <Route path="/" exact component={withRouter(QuestionsList)} />
                                <Route path="/add" component={withRouter(QuestionSubmit)} />
                                <Route path="/leaderboard" component={withRouter(Leaderboard)} />
                                <Route path="/question/:id" component={withRouter(QuestionDetails)} />
                            </Switch>
                        }
                    </AppContainer>
                </Router>
            </ConnectedRouter>
        );
    }
}

export default connect()(App);
