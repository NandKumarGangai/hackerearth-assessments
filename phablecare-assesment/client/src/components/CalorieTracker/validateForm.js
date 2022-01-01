import * as yup from 'yup';

export const validationSchema = yup.object({
    item: yup
        .string('Enter item name')
        .required('Item name is required'),
    calories: yup
        .number('Enter calories')
        .required("Calories are required"),
});