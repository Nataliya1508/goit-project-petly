import * as yup from 'yup'
import moment from 'moment/moment'

const addPetSchema = yup.object().shape({
    name: yup.string().min(2).max(16).required("Required"),
    birthday: yup.date().min(moment("06021995", "DDMMYYYY"), 'Must be at later than 06.02.1995').max(moment(), `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`).required("Required"),
    breed: yup.string().min(2).max(24).required("Required"),
    photo: yup.string().required("Required"),
    comments: yup.string().min(8).max(120),
});

export default addPetSchema