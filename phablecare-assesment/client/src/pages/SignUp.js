import { withRouter } from 'react-router-dom';
import SignUp from '../components/signUp';
import { addNewUser } from '../serviceCalls';

const initialValues = {
    email: '',
    password: ''
};

const SignUpPage = ({ history }) => {

    const onSubmit = (values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        addNewUser(values, history, resetForm);
    };

    const props = {
        initialValues,
        onSubmit
    };

    return (
        <SignUp {...props} />
    );
};

export default withRouter(SignUpPage);
