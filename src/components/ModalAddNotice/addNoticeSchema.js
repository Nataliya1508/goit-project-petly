import * as yup from 'yup';
import moment from 'moment/moment'

const regexAdress = /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

const addNoticeSchema = yup.object().shape({
    category: yup.string().oneOf(['lost-found', 'good-hands', 'sell']).required("Required"),
    title: yup.string().min(2).max(48).required("Required"),
    name: yup.string().min(2).max(16),
    birthday: yup.date().min(moment("06021995", "DDMMYYYY"), 'Must be at later than 06.02.1995').max(moment(), `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`),
    breed: yup.string().min(2).max(24),
    sex: yup.string().oneOf(['male', 'female']).required("Required"),
    location: yup.string().matches(regexAdress, 'Must be in format City, Region'),
    price: yup.number().positive('Must be a positive number').min(1).required("Required"),
    photo: yup.mixed().nullable().test(
      'fileFormat',
      'Unsupported file type',
      (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
    comments: yup.string().min(8).max(120).required("Required"),
});

export default addNoticeSchema
