import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { formatAnswer } from "../../utils/helpers";
import QuestionCard from "./QuestionCard";
import QuestionViewer from "./QuestionViewer";
import QuestionBuilder from "./QuestionBuilder";

class Question extends Component {
    componentDidMount() {
        const { question, builder, dispatch } = this.props;
        if (question === undefined && builder === undefined){
            setTimeout(() => dispatch(push("/not-found")), 10);
        }
    }

    render() {
        const { authedUser, question, row, column, builder } = this.props;
        const answer = formatAnswer(authedUser, question);
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
                        {
                            builder !== undefined &&
                            <>
                                <QuestionBuilder />
                            </>
                        }
                    </>
                }
            </>
        );
    }
}

function mapStateToProps({ authedUser, users, questions, dispatch }, { id }) {
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
