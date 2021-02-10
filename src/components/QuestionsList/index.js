import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from "../Question";
import { Container, Grid, CssBaseline } from '@material-ui/core';
import { Hoverable } from "../Styles";

class QuestionsList extends Component {
    render () {
        return (
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <CssBaseline />
                    {this.props.questionIds.map(questionId => (
                        <Grid xs={4} item key={questionId}>
                            <Hoverable>
                                <Question id={questionId} />
                            </Hoverable>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionsList);
