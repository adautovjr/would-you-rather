export function formatAnswer(user, question) {
    if (question === undefined) {
        return false;
    }
    const isAnswered = question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    return {
        qid: question.id,
        isAnswered,
        totalVotes,
        optionOne: {
            percentage: `${Math.round((question.optionOne.votes.length / totalVotes) * 100)}%`,
            votes: question.optionOne.votes.length,
            userVoted: question.optionOne.votes.includes(user),
            text: question.optionOne.text
        },
        optionTwo: {
            percentage: `${Math.round((question.optionTwo.votes.length / totalVotes) * 100)}%`,
            votes: question.optionTwo.votes.length,
            userVoted: question.optionTwo.votes.includes(user),
            text: question.optionTwo.text
        }
    }
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatQuestion({ optionOne, optionTwo, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOne,
        },
        optionTwo: {
            votes: [],
            text: optionTwo,
        }
    }
}