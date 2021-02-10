import { Card, CardContent, Grid } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Author} from '../Styles';
import { formatAnswer } from "../../utils/helpers";
import Options from "./Options";

class Question extends Component {
    render() {
        const { authedUser, question } = this.props;
        const answer = formatAnswer(authedUser, question);
        console.log("question", question);
        console.log("answer", answer);
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
                            <Options question={question} answer={answer} />
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
