import { connect } from 'react-redux';
import { Grid, Card, CardContent } from '@material-ui/core';
import { Author, LeaderboardCardStyle } from "../../Styles";

const LeaderboardCard = ({ user }) => {
    return (
        <LeaderboardCardStyle>
            {
                user &&
                <Card className="card">
                    <CardContent>
                        <Grid container>
                            <Grid item xs={4}>
                                <Author>
                                    <img alt={user.name} src={user.avatarURL} />
                                </Author>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container className="info">
                                    <Grid item xs={8}>
                                        <div className="details padding">
                                            <div className="name">
                                                {user.name}
                                            </div>
                                            <div className="spacer" />
                                            <div className="data">
                                                <div className="label">Answered questions</div>
                                                <div className="spacer" />
                                                <div className="value">{Object.keys(user.answers).length}</div>
                                            </div>
                                            <hr />
                                            <div className="data">
                                                <div className="label">Created questions</div>
                                                <div className="spacer" />
                                                <div className="value">{Object.keys(user.questions).length}</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="score padding">
                                            <div className="score-plaque">
                                                <div className="header">
                                                    Score
                                                            </div>
                                                <div className="body">
                                                    <div className="circle">
                                                        { Object.keys(user.answers).length + user.questions.length }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            }
        </LeaderboardCardStyle>
    );
}

function mapStateToProps({ users }, { userId }) {
    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(LeaderboardCard);