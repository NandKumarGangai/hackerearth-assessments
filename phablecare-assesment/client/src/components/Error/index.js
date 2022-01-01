import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Error = () => {

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Typography component='h1' variant='h5'>
                {'Something went wrong...'}
            </Typography>
            <Grid container>
                <Grid item>
                    <RouterLink to='/'>
                            {"Click here to go to home!"}
                    </RouterLink>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Error;