import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Button, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import menuItems from "./menuItems";
import { Author } from '../Styles';
import { logout } from '../../actions/shared';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#333"
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#00c4e3"
    },
    link: {
        textDecoration: "none",
        color: "#333"
    },
    drawerLink: {
        textDecoration: "none",
        color: "#757575"
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    username: {
        marginRight: "5px",
        color: "#333",
        fontSize: "15px"
    }
}));

function Navbar({ authedUser, dispatch }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <Link className={classes.link} to="/">
                    <Button color="inherit">
                        Home
                    </Button>
                </Link>
                <div className={classes.grow} />
                {
                    authedUser.name !== undefined
                    ?   <>
                            <Typography className={classes.username} variant="h6" noWrap>
                                { `Hello, ${authedUser.name}` }
                            </Typography>
                            <Author icon>
                                <img alt={authedUser.name} src={authedUser.avatarURL} />
                            </Author>
                            <Button edge="end" className={classes.link} color="inherit" onClick={() => dispatch(logout())}>
                                Logout
                            </Button>
                        </>
                    :   <>
                            <Link edge="end" className={classes.link} to="/login">
                                <Button color="inherit">
                                    Login
                                </Button>
                            </Link>
                        </>
                }
            </Toolbar>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <Link className={classes.drawerLink} key={`${index}_${item.label}`} to={item.path}>
                                <ListItem button>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                </div>
            </SwipeableDrawer>
        </AppBar>
    );
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: {
            ...users[authedUser],
            avatarURL: users[authedUser] ? `/${users[authedUser].avatarURL}` : ""
        }
    }
}

export default connect(mapStateToProps)(Navbar);