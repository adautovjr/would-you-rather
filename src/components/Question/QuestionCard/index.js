import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import { Author } from '../../Styles';
import Options from "../Options";

const QuestionCard = ({ question, answer }) => {
    return (
        <Card>
            <CardContent>
                <Grid container className="question">
                    <Grid item xs={4}>
                        <Author>
                            <img alt={question.author.name} src={question.author.avatarURL} />
                            <div>{question.author.name}</div>
                        </Author>
                    </Grid>
                    <Grid item xs={8}>
                        <Options column answer={answer} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default QuestionCard;