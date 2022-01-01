import * as yup from 'yup';

export const validationSchema = yup.object({
    weight: yup
        .number('Enter your weight in kg')
        .required('Weight is required'),
    bodyfat: yup
        .number('Enter you body fat percent')
        .required("Body fat percent is required"),
    'activity-levels': yup
        .string('Please select activity levels')
        .required('Activity level is required'),
});