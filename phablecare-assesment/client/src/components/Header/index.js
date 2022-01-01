import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
import { navigateToLoginPage } from '../../serviceCalls'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const Header = ({history}) => {
    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.clear();
        navigateToLoginPage(history);
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {'TDEE Calculator'}
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <Button
                            color="inherit"
                        >
                            <RouterLink className={classes.link} to={'/dashboard'} >
                                {'TDEE Calculator'}
                            </RouterLink>
                        </Button>
                        <Button
                            color="inherit"
                        >
                            <RouterLink className={classes.link} to={'/calorie-tracker'} >
                                {'Calorie Tracker'}
                            </RouterLink>
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleLogout}
                        >
                            {'Logout'}
                        </Button>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;