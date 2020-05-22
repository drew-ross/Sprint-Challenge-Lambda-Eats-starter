import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim()
        .min(2, 'Name must be at least 2 characters.')
        .required('Name required.')
})

export default formSchema;