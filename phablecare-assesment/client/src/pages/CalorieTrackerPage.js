import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import CalorieTracker from '../components/CalorieTracker';
import { saveItems, fetchInitialItems } from '../serviceCalls';
import { ADD_ITEM } from '../store/actionTypes';

const initialValues = {
    item: '',
    calories: ''
};

const RedirectComponent = () => <Redirect to='/' />;

const CalorieTrackerPage = ({ history }) => {
    const dispatch = useDispatch();
    const [isUser] = useState(JSON.parse(localStorage.getItem('user'))?.token);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchInitalData = async () => {
            await fetchInitialItems(dispatch);
        };

        fetchInitalData();

      return () => {};
    }, []);

    if(success) {
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    }

    const onSubmit = (values, { resetForm }) => {
        dispatch({
            type: ADD_ITEM,
            payload: [{
                ...values,
                id: +new Date()
            }]
        });
        resetForm()
    };

    const onSaveChanges = async (items) => {
        const success = await saveItems(items, dispatch);
        setSuccess(success);
    }

    const props = {
        initialValues,
        onSubmit,
        onSaveChanges,
        success
    };

    if (!isUser) {
        return <RedirectComponent />
    }
    return (
        <>
            <Header history={history} />
            <CalorieTracker {...props} />
        </>
    );
};

export default withRouter(CalorieTrackerPage);
