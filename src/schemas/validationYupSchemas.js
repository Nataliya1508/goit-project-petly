import * as Yup from 'yup';

const regexPassword = /^\S*$/
const regexPhoneNumber = /^\+380\d{3}\d{2}\d{2}\d{2}$/

export const regesterYupSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.string().min(7, 'Must be 7 characters or more').max(32, 'Must be 32 characters or less').matches(regexPassword, 'Must not contain spaces').required("Required"),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Required"),
    name: Yup.string(),
    address: Yup.string(),
    phone: Yup.string().max(13, 'Must be 12 numbers or less').matches(regexPhoneNumber, 'Mobile phone must include numbers in format +380xxxxxxxxx'),
});

export const loginYupSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.string().min(7, 'Must be 7 characters or more').max(32, 'Must be 32 characters or less').matches(regexPassword, 'Must not contain spaces').required("Required"),
});