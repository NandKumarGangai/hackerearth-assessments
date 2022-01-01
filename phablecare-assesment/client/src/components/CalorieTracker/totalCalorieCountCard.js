import React from 'react';
import _get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: '900'
    }
}));

const CalorieScoreCard = () => {
    const classes = useStyles();
    const totalCaloriesCount = useSelector(_ => _get(_, 'appreducer.totalCalories', 0));

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                {
                    totalCaloriesCount ? (
                        <Typography component='h1' variant='h5'>
                            {`Total calorie of your items is:  `} <span className={classes.bold}>{totalCaloriesCount}</span>
                        </Typography>
                    ) : (
                        <Typography component='h2' variant='h5'>
                            {`Please add items to calculate calories.!`}
                        </Typography>
                    )
                }

            </Paper>
        </div>
    );
}

export default CalorieScoreCard;