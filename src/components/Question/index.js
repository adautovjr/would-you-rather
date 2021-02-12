import { Component } from 'react';
import { connect } from 'react-redux';
import { formatAnswer } from "../../utils/helpers";
import QuestionCard from "./QuestionCard";
import QuestionViewer from "./QuestionViewer";
import QuestionBuilder from "./QuestionBuilder";

class Question extends Component {
    render() {
        const { authedUser, question, row, column } = this.props;
        const answer = formatAnswer(authedUser, question);
        // console.log("question", question);
        // console.log("answer", answer);
        return (
            <>
                {
                    question !== undefined
                    ? <>
                        {
                            answer &&
                            <>
                                {
                                    row &&
                                    <QuestionViewer answer={answer} question={question} />
                                }
                                {
                                    column &&
                                    <QuestionCard answer={answer} question={question} />
                                }
                            </>
                        }
                    </>
                    : <>
                        <QuestionBuilder />
                    </>
                }
            </>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    if (questions[id] !== undefined) {
        const author = {
            avatarURL: users[questions[id].author] ? `/${users[questions[id].author].avatarURL}` : "",
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
    return { authedUser, users, questions, id };
}

export default connect(mapStateToProps)(Question);
