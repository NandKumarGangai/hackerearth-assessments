import axios from 'axios';
import _get from 'lodash/get';
import { FETCH_ITEMS, SET_TDEE } from '../store/actionTypes';

export const navigateToLoginPage = history => history.push('/login');
const navigateToErrorPage = history => history.push('/error');
const navigateToDashboardPage = history => history.push('/dashboard');

const handleResponse = (history, reset) => () => {
    reset();
    navigateToLoginPage(history);
};

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const addNewUser = (reqBody = {}, history, resetFormValues) => {
    const request = {
        url: `${process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : ''}/api/v1/signup`,
        method: 'post',
        data: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(request)
        .then(handleResponse(history, resetFormValues))
        .catch(handleError(history));
}

const handleLoginResponse = (history, reset) => (response) => {
    reset();
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.data.body || {}));
    navigateToDashboardPage(history);
};

const handleCalculateTDEEResponse = (history, reset, dispatch) => (response) => {
    reset();
    console.log(response);
    dispatch({
        type: SET_TDEE,
        payload: _get(response, 'data.body', {})
    })
    navigateToDashboardPage(history);
};

export const userLogin = (reqBody = {}, history, resetFormValues) => {
    const request = {
        url: `${process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : ''}/api/v1/login`,
        method: 'post',
        data: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(request)
        .then(handleLoginResponse(history, resetFormValues))
        .catch(handleError(history));
}

export const calculateTDEE = (reqBody = {}, history, resetFormValues, dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const requestData = {
        ...reqBody,
        email: user.user
    }
    const request = {
        url: `${process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : ''}/api/v1/calculate-tdee`,
        method: 'post',
        data: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.token}`
        }
    };

    return axios(request)
        .then(handleCalculateTDEEResponse(history, resetFormValues, dispatch))
        .catch(handleError(history));
}

export const saveItems = (items, dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const requestData = {
        items,
        email: user.user
    }
    const request = {
        url: `${process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : ''}/api/v1/save-items`,
        method: 'post',
        data: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.token}`
        }
    };

    return axios(request)
        .then(async () => await fetchInitialItems(dispatch))
        .catch(err => {console.log('==> ', err); return false;});
};

export const fetchInitialItems = (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const requestData = {
            email: user.user
        }
        const request = {
            url: `${process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : ''}/api/v1/get-all-items`,
            method: 'post',
            data: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${user.token}`
            }
        };
    
        return axios(request)
            .then(res => {
                dispatch({
                    type: FETCH_ITEMS,
                    payload: _get(res, 'data.body', [])
                });
                return true;
            })
            .catch(err => {console.log('==> ', err); return false;});
    }
}