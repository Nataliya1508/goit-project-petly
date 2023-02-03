import * as yup from 'yup';

const addNoticeSchema = yup.object().shape({
    category: yup.string().required("Required"),
    title: yup.string().required("Required"),
    name: yup.string().required("Required"),
    birthday: yup.string().required("Required"),
    breed: yup.string().required("Required"),
    sex: yup.string().required("Required"),
    location: yup.string().required("Required"),
    price: yup.string().required("Required"),
    photo: yup.string().required("Required"),
    comments: yup.string(),
});

export default addNoticeSchema