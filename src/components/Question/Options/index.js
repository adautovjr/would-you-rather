import React from 'react';
import { OptionsContainer, Option } from '../../Styles';
import CheckIcon from '@material-ui/icons/Check';

const Options = ({ answer, row, column, builder }) => {
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
                                    <Option row={row || false} left>
                                        <div className="text">
                                            {answer.optionOne.text}
                                        </div>
                                    </Option>
                                    <Option row={row || false} right>
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

export default Options;
