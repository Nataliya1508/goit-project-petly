import * as yup from 'yup';

const addPetSchema = yup.object().shape({
    name: yup.string().required("Required"),
    birthday: yup.string().required("Required"),
    breed: yup.string().required("Required"),
    photo: yup.string().required("Required"),
    comments: yup.string(),
});

export default addPetSchema