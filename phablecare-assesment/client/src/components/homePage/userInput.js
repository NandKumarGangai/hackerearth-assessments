import React from 'react';
import { useFormik } from 'formik';
import _get from 'lodash/get';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { validationSchema } from './validateForm';
import { useSelector } from 'react-redux';
import TDEEScoreCard from './TDEEScoreCard';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    fullWidth: {
        width: '100%'
    }
}));

const activityLevels = [
    {
        value: 'sedentary',
        description: 'Sedentary'
    },
    {
        value: 'lightly-active',
        description: 'Lightly active'
    },
    {
        value: 'moderately-active',
        description: 'Moderately active'
    },
    {
        value: 'very-active',
        description: 'Very active'
    },
    {
        value: 'extra-active',
        description: 'Extra active'
    }
];

const UserInput = ({ initialValues, onSubmit }) => {
    const { tdee, bmr } = useSelector( _ => _get(_, 'appreducer.tdeeScore', ''));

    const classes = useStyles();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });

    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        {'TDEE Calculator'}
                    </Typography>
                    <Typography component='h2' variant='h5'>
                        {'(Total Daily Energy Expenditure)'}
                    </Typography>
                    <div className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    id='weight'
                                    label='Weight in kg'
                                    name='weight'
                                    autoComplete=''
                                    value={formik.values.weight}
                                    onChange={formik.handleChange}
                                    error={formik.touched.weight && Boolean(formik.errors.weight)}
                                    helperText={formik.touched.weight && formik.errors.weight}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    name='bodyfat'
                                    label='Body fat in percent'
                                    type='bodyfat'
                                    id='bodyfat'
                                    autoComplete=''
                                    value={formik.values.bodyfat}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bodyfat && Boolean(formik.errors.bodyfat)}
                                    helperText={formik.touched.bodyfat && formik.errors.bodyfat}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl
                            variant="outlined"
                            className={classes.fullWidth}
                            error={formik.touched['activity-levels'] && Boolean(formik.errors['activity-levels'])}
                            >
                                    <InputLabel id="activity-levels">{'Activity levels'}</InputLabel>
                                    <Select
                                        labelId="activity-levels"
                                        id="activity-levels"
                                        name="activity-levels"
                                        label="Activity levels"
                                        autoWidth={false}
                                        displayEmpty={false}
                                        className={classes.fullWidth}
                                        value={formik.values['activity-levels']}
                                        onChange={e => formik.handleChange(e)}
                                    >
                                        <MenuItem value="">{'Select'}</MenuItem>
                                        {
                                            activityLevels.map(({ value, description}) => 
                                            <MenuItem value={value} key={value}>{description}</MenuItem>)
                                        }
                                    </Select>
                                    {
                                        formik.touched['activity-levels'] && Boolean(formik.errors['activity-levels'])
                                            ? <FormHelperText>{formik.touched['activity-levels'] && formik.errors['activity-levels']}</FormHelperText>
                                            : null
                                    }
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            {'Calculate'}
                        </Button>
                    </div>
                </div>
            </Container>
        </form>
        {
            tdee && bmr ? (<TDEEScoreCard  score={{tdee, bmr}} />) : null
        }
        </>
    );
}

export default UserInput;