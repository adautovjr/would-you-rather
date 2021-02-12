import { Grid } from '@material-ui/core';
import React from 'react';
import { Author } from '../../Styles';
import Options from "../Options";

const QuestionViewer = ({ question, answer }) => {
    return (
        <Grid container className="question">
            <Grid item xs={12}>
                <Author row maxWidth="100px">
                    <div>
                        <img alt={question.author.name} src={question.author.avatarURL} />
                    </div>
                    <div>{question.author.name} asked: </div>
                    <div className="would-you-rather">Would you rather?</div>
                </Author>
            </Grid>
            <Grid item xs={12}>
                <Options row question={question} answer={answer} />
            </Grid>
        </Grid>
    );
}

export default QuestionViewer;