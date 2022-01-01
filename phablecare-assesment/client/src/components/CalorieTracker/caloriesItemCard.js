import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            height: theme.spacing(8),
        },
    },
    paper: {
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bold: {
        fontWeight: '900'
    },
    button: {
        color: 'red'
    }
}));

const CalorieScoreCard = ({ item, onClick }) => {
    const classes = useStyles();
    const {
        id,
        item: calorieItem,
        calories
    } = item || {};

    const handleOnClick = () => {
        onClick(id)
    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>

                <Typography component='h1' variant='h5'>
                    <span className={classes.bold}>{calorieItem}</span>
                </Typography>

                <Typography component='h2' variant='h5'>
                    {'Calories: '}<span className={classes.bold}>{calories}</span>
                </Typography>
                <IconButton
                aria-label="delete"
                className={classes.button}
                onClick={handleOnClick}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Paper>
        </div>
    );
}

export default CalorieScoreCard;