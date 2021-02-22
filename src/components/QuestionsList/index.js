import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Question from "../Question";
import { Container, Grid, CssBaseline, Tabs, Tab, Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Hoverable } from "../Styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },
}));

function QuestionsList({ dispatch, answeredQuestionIds, unansweredQuestionIds }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const checkQuestion = (questionId) => dispatch(push(`/question/${questionId}`));

    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <CssBaseline />
                <AntTabs value={value} onChange={handleChange}>
                    <AntTab label="Unanswered" />
                    <AntTab label="Answered" />
                </AntTabs>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={3}>
                        {unansweredQuestionIds.map(questionId => (
                            <Grid onClick={() => checkQuestion(questionId)} xs={4} item key={questionId}>
                                <Hoverable>
                                    <Question column id={questionId} />
                                </Hoverable>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={3}>
                        {answeredQuestionIds.map(questionId => (
                            <Grid onClick={() => checkQuestion(questionId)} xs={4} item key={questionId}>
                                <Hoverable>
                                    <Question column id={questionId} />
                                </Hoverable>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </div>
        </Container >
    );
}

function mapStateToProps({ authedUser, questions }) {
    let answered = {}, unanswered = {};
    Object.values(questions).map(question =>
        (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
        ? answered[question.id] = question
        : unanswered[question.id] = question
    );
    return {
        answeredQuestionIds: Object.keys(answered)
            .sort((a, b) => answered[b].timestamp - answered[a].timestamp),
        unansweredQuestionIds: Object.keys(unanswered)
            .sort((a, b) => unanswered[b].timestamp - unanswered[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionsList);
