import React, { Component } from 'react';
import { OptionsContainer, Option } from '../../Styles';

class Options extends Component {
    render() {
        const { answer } = this.props;
        console.log("answer", answer);
        return (
            <OptionsContainer column>
                {
                    answer.isAnswered
                    ?   <>
                            <Option left>
                                { answer.optionOne.userVoted &&
                                    <div className="voted">
                                        you voted this
                                    </div>
                                }
                                <div className="text">
                                    {answer.optionOne.text}
                                </div>
                                <div className="votes">
                                    {answer.optionOne.votes} {answer.optionOne.votes === 1 ? "person" : "people"} voted this
                                </div>
                                <div className="percentage">
                                    {answer.optionOne.percentage}
                                </div>
                            </Option>
                            <Option right>
                                { answer.optionTwo.userVoted &&
                                    <div className="voted">
                                        you voted this
                                    </div>
                                }
                                <div className="text">
                                    {answer.optionTwo.text}
                                </div>
                                <div className="votes">
                                    {answer.optionTwo.votes} {answer.optionTwo.votes === 1 ? "person" : "people"} voted this
                                </div>
                                <div className="percentage">
                                    {answer.optionTwo.percentage}
                                </div>
                            </Option>
                        </>
                    :   <>
                            <Option left>
                                <div className="text">
                                    {answer.optionOne.text}
                                </div>
                            </Option>
                            <Option right>
                                <div className="text">
                                    {answer.optionTwo.text}
                                </div>
                            </Option>
                        </>

                }
            </OptionsContainer>
        );
    }
}

export default Options;
