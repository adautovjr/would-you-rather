import { Card, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Author, Options, Option } from '../Styles';

class Question extends Component {
    render() {
        console.log(this.props);
        return (
            <Card>
                <CardContent>
                    <Grid container className="question">
                        <Grid item xs={4}>
                            <Author>
                                <img alt={this.props.question.author.name} src={this.props.question.author.avatarURL} />
                                <div>{this.props.question.author.name}</div>
                            </Author>
                        </Grid>
                        <Grid item xs={8}>
                            <Options column>
                                <Option left>{this.props.question.optionOne.text}</Option>
                                <Option right>{this.props.question.optionTwo.text}</Option>
                            </Options>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const author = {
        avatarURL: users[questions[id].author] ? users[questions[id].author].avatarURL : "",
        name: users[questions[id].author] ? users[questions[id].author].name : questions[id].author
    }
    const question = {
        ...questions[id],
        author
    };

    return {
        authedUser,
        question
    }
}

export default connect(mapStateToProps)(Question);
