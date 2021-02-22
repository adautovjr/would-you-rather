export function formatAnswer (user, question) {
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
            percentage: `${Math.round((question.optionOne.votes.length/totalVotes)*100)}%`,
            votes: question.optionOne.votes.length,
            userVoted: question.optionOne.votes.includes(user),
            text: question.optionOne.text
        },
        optionTwo: {
            percentage: `${Math.round((question.optionTwo.votes.length/totalVotes)*100)}%`,
            votes: question.optionTwo.votes.length,
            userVoted: question.optionTwo.votes.includes(user),
            text: question.optionTwo.text
        }
    }
}