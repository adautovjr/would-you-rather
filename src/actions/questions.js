import { push } from 'connected-react-router';
import { updateUserWithQuestion, updateUserWithAnswer } from "./users";
import { formatQuestion } from "../utils/helpers";

export const RECEIVE_QUESTIONS = '@questions/RECEIVE_QUESTIONS';
export const SAVE_QUESTION = '@questions/SAVE_QUESTION';
export const VOTE_OPTION = '@questions/VOTE_OPTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion({ formattedQuestion, questions }) {
    return {
        type: SAVE_QUESTION,
        questions: {
            ...questions,
            [formattedQuestion.id]: formattedQuestion
        }
    }
}

export function submitQuestion({ question, questions, users }) {
    const formattedQuestion = formatQuestion(question);
    return (dispatch) => {
        dispatch(saveQuestion({ formattedQuestion, questions }));
        dispatch(updateUserWithQuestion({ formattedQuestion, users }));
        setTimeout(() => dispatch(push(`/`)), 200);
        return null;
    }
}

export function toggleOptionOnQuestion({ authedUser, qid, answer, questions }) {
    return {
        type: VOTE_OPTION,
        questions: {
            ...questions,
            [qid]: {
                ...questions[qid],
                [answer]: {
                    ...questions[qid][answer],
                    votes: questions[qid][answer].votes.concat([authedUser])
                }
            }
        }
    }
}

export function vote(info) {
    return (dispatch) => {
        dispatch(toggleOptionOnQuestion(info));
        dispatch(updateUserWithAnswer(info));
        return null;
    }
}