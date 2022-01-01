import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: '900'
    }
}));

const TDEEScoreCard = ({score}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    {`Your TDEE score is: `} <span className={classes.bold}>{score.tdee}</span>
                </Typography>
                <hr/>
                <Typography component='h1' variant='h5'>
                    {`Your BMR score is: `} <span className={classes.bold}>{score.bmr}</span>
                </Typography>
            </Paper>
        </div>
    );
}

export default TDEEScoreCard;