import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard = ({ userIds }) => {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={0}>
                <CssBaseline />
                {
                    userIds &&
                    userIds.map(id => (
                        <Grid xs={12} item key={id}>
                            <LeaderboardCard userId={id} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

function mapStateToProps({ users }) {
    let mappedUsers = {};
    Object.values(users).map(user => {
        mappedUsers[user.id] = {
            ...user,
            score: ( Object.keys(user.answers).length + user.questions.length )
        };
        return user;
    });
    return {
        userIds: Object.keys(mappedUsers)
        .sort((a, b) => mappedUsers[b].score - mappedUsers[a].score),
    };
}

export default connect(mapStateToProps)(Leaderboard);