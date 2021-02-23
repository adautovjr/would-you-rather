import React from 'react';
import { connect } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { OptionsContainer, Option, Limiter } from '../../Styles';
import { vote, submitQuestion } from '../../../actions/questions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[600],
        },
    },
    submitIcon: {
        color: "white"
    }
}));

const Options = ({ authedUser, answer, row, column, builder, dispatch, questions, users }) => {
    const theme = useTheme();
    const classes = useStyles();
    const inputLimit = 40;

    const [optionOne, setOptionOne] = React.useState("");
    const [optionTwo, setOptionTwo] = React.useState("");
    const [optionOneChars, setOptionOneChars] = React.useState(0);
    const [optionTwoChars, setOptionTwoChars] = React.useState(0);
    const [showSubmitButton, setShowSubmitButton] = React.useState(false);

    const handleChangeOptionOne = (event) => {
        if(inputLimit - event.target.value.length >= 0) {
            setOptionOne(event.target.value);
            setOptionOneChars(inputLimit - event.target.value.length);
        }
        setShowSubmitButton(optionTwo !== "" && event.target.value !== "");
    };
    const handleChangeOptionTwo = (event) => {
        if(inputLimit - event.target.value.length >= 0) {
            setOptionTwo(event.target.value);
            setOptionTwoChars(inputLimit - event.target.value.length);
        }
        setShowSubmitButton(optionOne !== "" && event.target.value !== "");
    };
    const handleSubmitQuestion = (event) => {
        const info = {
            question: { author: authedUser, optionOne, optionTwo },
            questions,
            users
        }
        dispatch(submitQuestion(info));
    };

    const handleOptionClick = (option, isRow) => {
        if (isRow){
            dispatch(vote({ authedUser, qid: answer.qid, answer: option, questions, users }));
        }
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <OptionsContainer row={row || false} column={column || false}>
            {
                !builder
                    ? <>
                        {
                            answer.isAnswered
                                ? <>
                                    <Option row={row || false} answered left>
                                        {(row && answer.optionOne.userVoted) &&
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
                                        {(row && answer.optionTwo.userVoted) &&
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
                                    <Option onClick={() => handleOptionClick("optionOne", row)} row={row || false} left>
                                        <div className="text">
                                            {answer.optionOne.text}
                                        </div>
                                    </Option>
                                    <Option onClick={() => handleOptionClick("optionTwo", row)} row={row || false} right>
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
                                <input autoFocus placeholder="This" value={optionOne} onChange={handleChangeOptionOne} />
                            </div>
                            <Limiter chars={optionOneChars}>
                                {optionOne !== "" ? optionOneChars : ""}
                            </Limiter>
                        </Option>
                        <Option row right>
                            <div className="text">
                                <input placeholder="That" value={optionTwo} onChange={handleChangeOptionTwo} />
                            </div>
                            <Limiter chars={optionTwoChars}>
                                {optionTwo !== "" ? optionTwoChars : ""}
                            </Limiter>
                        </Option>
                        <Zoom
                            in={showSubmitButton}
                            timeout={transitionDuration}
                            style={{
                                transitionDelay: `${showSubmitButton ? transitionDuration.exit : 0}ms`,
                            }}
                            unmountOnExit
                        >
                            <Fab aria-label="Submit" className={classes.fab} color="inherit" onClick={handleSubmitQuestion}>
                                <CheckIcon className={classes.submitIcon} />
                            </Fab>
                        </Zoom>
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
