import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import Question from "../Question";
import { useParams } from "react-router-dom";

const QuestionDetails = () => {
    let { id } = useParams();
    return (
        <Container maxWidth="lg">
            <Grid container spacing={0}>
                <CssBaseline />
                <Grid xs={12} item>
                    <Question row id={id} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default connect()(QuestionDetails);