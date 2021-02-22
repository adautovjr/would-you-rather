import { _getUsers, _getQuestions } from "./_DATA";
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }));
}

export function saveQuestion (question) {
    return _saveQuestion(question).then(([users, questions]) => ({
        users,
        questions,
      }));
}

export function saveQuestionAnswer (authedUser, qid, answer) {
    return _saveQuestionAnswer(authedUser, qid, answer);
}