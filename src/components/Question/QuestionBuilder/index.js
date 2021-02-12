import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Author } from '../../Styles';
import Options from "../Options";

const QuestionBuilder = ({ user }) => {
    return (
        <Grid container className="question">
            {
                user &&
                <>
                    <Grid item xs={12}>
                        <Author row maxWidth="100px">
                            <div>
                                <img alt={user.name} src={user.avatarURL} />
                            </div>
                            <div>{user.name} is asking: </div>
                            <div className="would-you-rather">Would you rather?</div>
                        </Author>
                    </Grid>
                    <Grid item xs={12}>
                        <Options row builder />
                    </Grid>
                </>
            }
        </Grid>
    );
}

function mapStateToProps({ authedUser, users }) {
    return {
        user: {
            ...users[authedUser],
            avatarURL: users[authedUser] ? `/${users[authedUser].avatarURL}` : "",
        }
    };
}

export default connect(mapStateToProps)(QuestionBuilder);