import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router';
import QuestionsList from "../QuestionsList";
import QuestionDetails from "../QuestionDetails";
import QuestionSubmit from "../QuestionSubmit";
import Leaderboard from "../Leaderboard";
import Login from "../Login";
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
                <AppContainer>
                    {this.props.loading === true
                        ? null
                        : <Switch>
                            <Route path="/" exact component={withRouter(QuestionsList)} />
                            <Route path="/login" component={withRouter(Login)} />
                            <Route path="/add" component={withRouter(QuestionSubmit)} />
                            <Route path="/leaderboard" component={withRouter(Leaderboard)} />
                            <Route path="/question/:id" component={withRouter(QuestionDetails)} />
                        </Switch>
                    }
                </AppContainer>
            </ConnectedRouter>
        );
    }
}

export default connect()(App);