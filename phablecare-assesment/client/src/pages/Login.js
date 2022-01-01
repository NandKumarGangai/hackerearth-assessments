import { withRouter } from 'react-router-dom';
import Login from '../components/login';
import { userLogin } from '../serviceCalls';

const initialValues = {
    password: '',
    email: '',
};

const LoginComponent = ({ history }) => {

    const onSubmit = (values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        userLogin(values, history, resetForm);
    };

    const props = {
        initialValues,
        onSubmit
    };

    return (
        <Login {...props} />
    );
};

export default withRouter(LoginComponent);
