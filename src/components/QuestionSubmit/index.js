import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import Question from "../Question";

const QuestionSubmit = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={0}>
                <CssBaseline />
                <Grid xs={12} item>
                    <Question row />
                </Grid>
            </Grid>
        </Container>
    );
}

export default connect()(QuestionSubmit);