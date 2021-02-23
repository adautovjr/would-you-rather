import { RECEIVE_QUESTIONS, SAVE_QUESTION, VOTE_OPTION } from "../actions/questions";

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }
        case VOTE_OPTION:
            return {
                ...state,
                ...action.questions
            }
        default :
            return state
    }
}