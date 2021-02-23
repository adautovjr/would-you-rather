import React from 'react';
import { Container, Grid, CssBaseline, Card, CardContent, Button } from '@material-ui/core';
import { NotFoundStyle } from "../Styles";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={0}>
                <CssBaseline />
                <Grid item xs={12}>
                    <NotFoundStyle>
                        <Card>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <div className="not-found-container">
                                            <div className="not-found-code">
                                                404
                                            </div>
                                            <div className="not-found-message">
                                                Whooops! You might be lost..
                                            </div>
                                            <Link className="link" to="/">
                                                <Button color="inherit">
                                                    Go back
                                                </Button>
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </NotFoundStyle>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NotFound;