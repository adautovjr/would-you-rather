import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, CssBaseline, Card, CardContent, FormControl, Select, InputLabel } from '@material-ui/core';
import { LoginStyle } from "../Styles";
import { logUserIn } from "../../actions/shared";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width: "100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = ({ dispatch }) => {
    const classes = useStyles();
    let query = useQuery();
    const [state, setState] = React.useState({
        user: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        if (event.target.value !== "" && event.target.value !== undefined) {
            dispatch(logUserIn(event.target.value));
            setTimeout(() => dispatch(push(query.get("redirectRoute") !== null ? query.get("redirectRoute") : `/`)), 200);
        }
    };

    return (
        <Container maxWidth="sm">
            <Grid container spacing={0}>
                <CssBaseline />
                <Grid item xs={12}>
                    <LoginStyle>
                        <Card>
                            <CardContent>
                                <Grid container className="question">
                                    <Grid item xs={12}>
                                        <div className="login-logo">
                                            Insert logo here
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="user-select">User</InputLabel>
                                            <Select
                                                native
                                                value={state.user}
                                                onChange={handleChange}
                                                label="User"
                                                inputProps={{
                                                    name: 'user',
                                                    id: 'user-select'
                                                }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value="sarahedo">Sarah Edo</option>
                                                <option value="tylermcginnis">Tyler McGinnis</option>
                                                <option value="johndoe">John Doe</option>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </LoginStyle>
                </Grid>
            </Grid>
        </Container>
    );
}

export default connect()(Login);