import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import HomePageComponent from '../components/homePage';
import { calculateTDEE } from '../serviceCalls';
const initialValues = {
    weight: '',
    bodyfat: '',
    'activity-levels': ''
};

const RedirectComponent = () => <Redirect to='/' />;

const HomePage = ({ history }) => {
    const dispatch = useDispatch();
    const [isUser] = useState(JSON.parse(localStorage.getItem('user'))?.token);

    const onSubmit = (values, { resetForm }) => {
        calculateTDEE(values, history, resetForm, dispatch);
    };

    const props = {
        initialValues,
        onSubmit
    };

    if (!isUser) {
        return <RedirectComponent />
    }
    return (
        <>
            <Header history={history} />
            <HomePageComponent {...props} />
        </>
    );
};

export default withRouter(HomePage);
