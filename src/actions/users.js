export const RECEIVE_USERS = '@users/RECEIVE_USERS';
export const UPDATE_USER_ANSWER = '@users/UPDATE_USER_ANSWER';
export const SET_AUTHED_USER = '@users/SET_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function updateUserWithQuestion ({ formattedQuestion, users }) {
    const authedUser = formattedQuestion.author;
    return {
        type: UPDATE_USER_ANSWER,
        users: {
            ...users,
            [authedUser]: {
              ...users[authedUser],
              questions: users[authedUser].questions.concat([formattedQuestion.id])
            }
          }
    }
}

export function updateUserWithAnswer ({ authedUser, qid, answer, users }) {
    return {
        type: UPDATE_USER_ANSWER,
        users: {
            ...users,
            [authedUser]: {
                ...users[authedUser],
                answers: {
                    ...users[authedUser].answers,
                    [qid]: answer
                }
            }
        }
    }
}