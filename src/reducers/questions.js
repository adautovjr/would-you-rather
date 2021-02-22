import { RECEIVE_QUESTIONS, VOTE_OPTION } from "../actions/questions";

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case VOTE_OPTION:
            return {
                ...state,
                ...action.questions,
                ...action.users
            }
        default :
            return state
    }
}