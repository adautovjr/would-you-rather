import { updateUserWithAnswer } from "./users"

export const RECEIVE_QUESTIONS = '@questions/RECEIVE_QUESTIONS';
export const SAVE_QUESTION = '@questions/SAVE_QUESTION';
export const VOTE_OPTION = '@questions/VOTE_OPTION';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion ({ authedUser, question }) {
    return {
        type: SAVE_QUESTION,
        authedUser,
        question
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

export function vote (info) {
    return (dispatch) => {
        dispatch(toggleOptionOnQuestion(info));
        dispatch(updateUserWithAnswer(info));
        return null;     
    }
}