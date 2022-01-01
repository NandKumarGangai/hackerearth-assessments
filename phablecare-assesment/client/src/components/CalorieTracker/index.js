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
import Alert from '@material-ui/lab/Alert';
import CalorieScoreCard from './totalCalorieCountCard';
import CalorieItemCard from './caloriesItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchema } from './validateForm';
import { REMOVE_ITEM } from '../../store/actionTypes';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  fullWidth: {
    width: '100%'
  }
}));


const CalorieTracker = ({ initialValues, onSubmit, onSaveChanges, success }) => {
  const items = useSelector(_ => _get(_, 'appreducer.items', []));
  const dispatch = useDispatch();

  const classes = useStyles();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  });

  const onItemDelete = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: items.filter( item => item.id !== id)
    })
  }

  const handleOnSaveChanges = () => onSaveChanges(items)
  return (
    <>
      <Container component='main' maxWidth='xs'>
        {
          success ? <Alert severity="success">This is a success alert — check it out!</Alert> : null
        }
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            {'Calorie Tracker'}
          </Typography>
          <CalorieScoreCard />
          <form onSubmit={formik.handleSubmit}>
            <div className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    id='item'
                    label='Item name'
                    name='item'
                    autoComplete=''
                    value={formik.values.item}
                    onChange={formik.handleChange}
                    error={formik.touched.item && Boolean(formik.errors.item)}
                    helperText={formik.touched.item && formik.errors.item}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    name='calories'
                    label='Calories'
                    type='calories'
                    id='calories'
                    autoComplete=''
                    value={formik.values.calories}
                    onChange={formik.handleChange}
                    error={formik.touched.calories && Boolean(formik.errors.calories)}
                    helperText={formik.touched.calories && formik.errors.calories}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                {'Add item'}
              </Button>
            </div>
          </form>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                onClick={handleOnSaveChanges}
                className={classes.submit}
              >
                {'Save Changes'}
              </Button>
          {
            items.length ? 
              items.map( item =>  <CalorieItemCard key={item.id} item={item} onClick={onItemDelete} />)
            : null
          }
        </div>
      </Container>

    </>
  );
}

export default CalorieTracker;