import React from 'react';
import { connect } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import { OptionsContainer, Option } from '../../Styles';
import { vote } from '../../../actions/questions'

const Options = ({ authedUser, answer, row, column, builder, dispatch, questions, users }) => {

    const handleOptionClick = (option) => {
        dispatch(vote({ authedUser, qid: answer.qid, answer: option, questions, users }));
    }

    return (
        <OptionsContainer row={row || false} column={column || false}>
            {
                !builder
                    ? <>
                        {
                            answer.isAnswered
                                ? <>
                                    <Option row={row || false} answered left>
                                        {( row && answer.optionOne.userVoted ) &&
                                            <div className="voted">
                                                <CheckIcon />
                                            </div>
                                        }
                                        <div className="percentage">
                                            {answer.optionOne.percentage}
                                        </div>
                                        <div className="text">
                                            {answer.optionOne.text}
                                        </div>
                                        <div className="votes">
                                            {answer.optionOne.votes} {answer.optionOne.votes === 1 ? "person" : "people"} voted this
                                        </div>
                                    </Option>
                                    <Option row={row || false} answered right>
                                        {( row && answer.optionTwo.userVoted ) &&
                                            <div className="voted">
                                                <CheckIcon />
                                            </div>
                                        }
                                        <div className="percentage">
                                            {answer.optionTwo.percentage}
                                        </div>
                                        <div className="text">
                                            {answer.optionTwo.text}
                                        </div>
                                        <div className="votes">
                                            {answer.optionTwo.votes} {answer.optionTwo.votes === 1 ? "person" : "people"} voted this
                                        </div>
                                    </Option>
                                </>
                                : <>
                                    <Option onClick={() => handleOptionClick("optionOne")} row={row || false} left>
                                        <div className="text">
                                            {answer.optionOne.text}
                                        </div>
                                    </Option>
                                    <Option onClick={() => handleOptionClick("optionTwo")} row={row || false} right>
                                        <div className="text">
                                            {answer.optionTwo.text}
                                        </div>
                                    </Option>
                                </>
                        }
                    </>
                    : <>
                        <Option row left>
                            <div className="text">
                                {`This`}
                            </div>
                        </Option>
                        <Option row right>
                            <div className="text">
                                {`That`}
                            </div>
                        </Option>
                    </>
            }
        </OptionsContainer>
    );
}

function mapStateToProps({ authedUser, questions, users }, { answer, row, column, builder }) {
    return {
        authedUser,
        questions,
        users,
        answer,
        row,
        column,
        builder
    };
}

export default connect(mapStateToProps)(Options);
